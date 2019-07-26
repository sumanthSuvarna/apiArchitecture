var app = require('./server.js');
var request = require('supertest');
var expect = require('chai').expect;



describe('[COMMENT]', function () {

    it('should get all comments', function (done) {
        this.timeout(10000);
        request(app)
            .get('/orgs/xendit/comments')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, resp) {
                if (err) done(err)
                expect(resp.status).to.equal(200);
                expect(resp.body).to.be.an('array');
                done();
            })
    });

    it('should Post comments', function (done) {
        this.timeout(10000);
        request(app)
            .post('/orgs/xendit/comments')
            .send({
                "comment": "I am waitingk"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end(function (err, resp) {
                expect(resp.body).to.be.an('object');
                done();
            })
    });

    it('should delete all comments', function (done) {
        request(app)
            .delete('/orgs/xendit/comments')
            .end(function (err, resp) {
                expect(resp.body).to.an('array');
                done();
            });

    });

});
