/// <reference types="cypress" />

describe('Pet Store API tests', () => {
    const apiUrl = 'https://petstore.swagger.io/v2/pet';
    let petId;
  
    it('debería agregar una nueva mascota', () => {
      const pet = {
        "id": 1234,
        "category": {
          "id": 0,
          "name": "string"
        },
        "name": "tobby",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "status": "available"
      };
  
      cy.request('POST', apiUrl, pet).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.equal(pet);
        petId = response.body.id;
      });
    });
  
    it('debería obtener la mascota agregadat', () => {
      cy.request('GET', `${apiUrl}/${petId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(petId);
      });
    });
  
    it('debería actualizar la mascota agregada', () => {
      const updatedPet = {
        "id": petId,
        "category": {
          "id": 0,
          "name": "string"
        },
        "name": "doggie2",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "status": "sold"
      };
  
      cy.request('PUT', apiUrl, updatedPet).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.equal(updatedPet);
      });
    });
  });