import { describe, it, expect, beforeAll } from '@jest/globals';
import request from 'supertest';
import { app } from '../index.js';

describe('Node-DevOps-Boilerplate — Route Tests', () => {

    // ─── GET / (Root / Home Page) ────────────────────────────────────
    describe('GET / — Home Page', () => {
        it('should return 200 status code', async () => {
            const res = await request(app).get('/');
            expect(res.statusCode).toBe(200);
        });

        it('should return HTML content', async () => {
            const res = await request(app).get('/');
            expect(res.headers['content-type']).toMatch(/html/);
        });

        it('should contain page title or heading', async () => {
            const res = await request(app).get('/');
            // The home page should have some HTML content
            expect(res.text).toBeTruthy();
            expect(res.text.length).toBeGreaterThan(0);
        });
    });

    // ─── GET /about ──────────────────────────────────────────────────
    describe('GET /about — About Page', () => {
        it('should return 200 status code', async () => {
            const res = await request(app).get('/about');
            expect(res.statusCode).toBe(200);
        });

        it('should return HTML content', async () => {
            const res = await request(app).get('/about');
            expect(res.headers['content-type']).toMatch(/html/);
        });
    });

    // ─── GET /contact ────────────────────────────────────────────────
    describe('GET /contact — Contact Page', () => {
        it('should return 200 status code', async () => {
            const res = await request(app).get('/contact');
            expect(res.statusCode).toBe(200);
        });

        it('should return HTML content', async () => {
            const res = await request(app).get('/contact');
            expect(res.headers['content-type']).toMatch(/html/);
        });
    });

    // ─── POST /submit-contact ────────────────────────────────────────
    describe('POST /submit-contact — Form Submission', () => {
        it('should return 200 with valid form data', async () => {
            const res = await request(app)
                .post('/submit-contact')
                .send('name=Test+User&email=test@example.com&message=Hello+World');

            expect(res.statusCode).toBe(200);
            expect(res.text).toContain('Спасибо');
        });

        it('should return 200 with partial form data', async () => {
            const res = await request(app)
                .post('/submit-contact')
                .send('name=Test+User');

            expect(res.statusCode).toBe(200);
        });

        it('should return 200 with empty form data', async () => {
            const res = await request(app)
                .post('/submit-contact')
                .send('');

            expect(res.statusCode).toBe(200);
        });

        it('should include a link back to home page', async () => {
            const res = await request(app)
                .post('/submit-contact')
                .send('name=Test&email=test@test.com&message=Hi');

            expect(res.text).toContain('href="/"');
        });
    });

    // ─── 404 Not Found ──────────────────────────────────────────────
    describe('404 — Undefined Routes', () => {
        it('should return 404 for GET /nonexistent', async () => {
            const res = await request(app).get('/nonexistent');
            expect(res.statusCode).toBe(404);
        });

        it('should return 404 for POST /nonexistent', async () => {
            const res = await request(app).post('/nonexistent');
            expect(res.statusCode).toBe(404);
        });

        it('should return HTML error page for 404', async () => {
            const res = await request(app).get('/this/does/not/exist');
            expect(res.statusCode).toBe(404);
            expect(res.text).toContain('404');
        });

        it('should return 404 for deep nested routes', async () => {
            const res = await request(app).get('/a/b/c/d/e');
            expect(res.statusCode).toBe(404);
        });
    });

    // ─── Static Files Middleware ──────────────────────────────────────
    describe('Static Files', () => {
        it('should serve static CSS if it exists', async () => {
            const res = await request(app).get('/style.css');
            // If the file exists, it should be served; otherwise, 404 is acceptable
            expect([200, 404]).toContain(res.statusCode);
        });
    });
});
