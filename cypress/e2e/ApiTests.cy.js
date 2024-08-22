describe('Reqres API Tests', () => {
    const baseUrl = 'https://reqres.in';
  
    it('Test User Creation (POST)', () => {
      cy.request({
        method: 'POST',
        url: baseUrl+'/api/users',
        body: {
          name: 'John Doe',
          job: 'QA Engineer'
        }
      }).then(response => {
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('name', 'John Doe');
        expect(response.body).to.have.property('job', 'QA Engineer');
      });
    });
  
    it('Test Single User Retrieval (GET)', () => {
      cy.request(baseUrl+'/api/users/1').then(response => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.have.property('id', 1);
      });
    });
  
    it('Test User Update (PUT)', () => {
      cy.request({
        method: 'PUT',
        url: baseUrl+'/api/users/2',
        body: {
          name: 'Jane Doe',
          job: 'Software Developer'
        }
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('name', 'Jane Doe');
        expect(response.body).to.have.property('job', 'Software Developer');
      });
    });
  
    it('Test User Deletion (DELETE)', () => {
      cy.request({
        method: 'DELETE',
        url: baseUrl+'/api/users/3'
      }).then(response => {
        expect(response.status).to.equal(204);
      });
  
      // Attempt to retrieve the deleted user
      cy.request({
        method: 'GET',
        url: baseUrl+'/api/users/3',
        failOnStatusCode: false // To prevent Cypress from failing the test if user is not found
      }).then(response => {
        expect(response.status).to.equal(200);
      });
    });
  
    it('Test List Users (GET)', () => {
      cy.request(baseUrl+'/api/users').then(response => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('data').to.be.an('array');
      });
    });
  });
  