const request = require('supertest');
const app = require('../app');
const Report = require('../models/Report');

// Mock the Report model
jest.mock('../models/Report');

describe('POST /api/reports', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns 201 and saved document when description is provided', async () => {
    const mockReport = {
      _id: '507f1f77bcf86cd799439011',
      description: 'Pothole on Main St',
      status: 'Reported',
      createdAt: '2026-07-22T06:00:00.000Z',
    };
    
    Report.create.mockResolvedValue(mockReport);

    const res = await request(app)
      .post('/api/reports')
      .send({ description: 'Pothole on Main St' });

    expect(res.status).toBe(201);
    expect(res.body.description).toBe('Pothole on Main St');
    expect(res.body._id).toBe('507f1f77bcf86cd799439011');
    expect(res.body.status).toBe('Reported');
  });

  it('persists photoUrl when included', async () => {
    const mockReport = {
      _id: '507f1f77bcf86cd799439012',
      description: 'Broken streetlight',
      photoUrl: 'https://example.com/photo.jpg',
      status: 'Reported',
      createdAt: '2026-07-22T06:00:00.000Z',
    };
    
    Report.create.mockResolvedValue(mockReport);

    const res = await request(app)
      .post('/api/reports')
      .send({ description: 'Broken streetlight', photoUrl: 'https://example.com/photo.jpg' });

    expect(res.status).toBe(201);
    expect(res.body.photoUrl).toBe('https://example.com/photo.jpg');
  });

  it('returns 400 when description is missing', async () => {
    const res = await request(app)
      .post('/api/reports')
      .send({});
    expect(res.status).toBe(400);
    expect(res.body.message).toMatch(/description/i);
  });

  it('returns 400 when description is empty string', async () => {
    const res = await request(app)
      .post('/api/reports')
      .send({ description: '' });
    expect(res.status).toBe(400);
    expect(res.body.message).toMatch(/description/i);
  });
});

describe('GET /api/reports', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns 200 and empty array when no reports exist', async () => {
    Report.find.mockResolvedValue([]);

    const res = await request(app).get('/api/reports');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toHaveLength(0);
  });

  it('returns 200 and all reports', async () => {
    const mockReports = [
      { _id: '1', description: 'Report 1' },
      { _id: '2', description: 'Report 2' },
    ];
    Report.find.mockResolvedValue(mockReports);

    const res = await request(app).get('/api/reports');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);
    expect(res.body[0].description).toBe('Report 1');
  });
});

describe('GET /api/reports/:id', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns 200 and matching document for existing ID', async () => {
    const mockReport = {
      _id: '507f1f77bcf86cd799439011',
      description: 'Graffiti on wall',
    };
    Report.findById.mockResolvedValue(mockReport);

    const res = await request(app).get('/api/reports/507f1f77bcf86cd799439011');
    expect(res.status).toBe(200);
    expect(res.body._id).toBe('507f1f77bcf86cd799439011');
    expect(res.body.description).toBe('Graffiti on wall');
  });

  it('returns 404 for valid ObjectId that does not exist', async () => {
    Report.findById.mockResolvedValue(null);

    const res = await request(app).get('/api/reports/507f1f77bcf86cd799439011');
    expect(res.status).toBe(404);
    expect(res.body.message).toMatch(/not found/i);
  });

  it('returns 400 for malformed ID string', async () => {
    const res = await request(app).get('/api/reports/not-a-valid-id');
    expect(res.status).toBe(400);
    expect(res.body.message).toMatch(/invalid/i);
  });
});
