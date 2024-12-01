import {faker} from "@faker-js/faker";

describe('CRUD operations',()=>{
    let token= '7b990b6384957cbd4b166d0e8c405d2440823f8339af99732f5967fdff9ea6a5';
    let id;
    const randomName = faker.person.firstName();
    const randomEmail = faker.internet.email();
    const updateRequestBody = {
        "name": faker.person.firstName(),
        "email": faker.internet.email(),
        "status": "active",
    };

    it('should create, update, and delete a user',()=>{
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: {
            "name": randomName,
            "gender": "male",
            "email": randomEmail,
            "status": "active"
            },
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.name).to.eq(randomName);
            expect(response.body.email).to.eq(randomEmail);
            expect(response.body.gender).to.eq('male');
            expect(response.body.status).to.eq('active');
            expect(response.body).to.have.property('id');

            id = response.body.id;
            cy.log('id', id);

        }).then(()=> {
            cy.request({
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                url: `https://gorest.co.in/public/v2/users/${id}`,
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('id')
                expect(response.body.name).to.eq(randomName);
                expect(response.body.email).to.eq(randomEmail);
            }).then(() => {
                cy.request({
                    method: 'PATCH',
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                    body: updateRequestBody,
                }).then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body.name).to.eq(updateRequestBody.name);
                    expect(response.body.email).to.eq(updateRequestBody.email);
                    expect(response.body.status).to.eq(updateRequestBody.status);
                }).then(() =>{
                    cy.request({
                        method: 'GET',
                        url: `https://gorest.co.in/public/v2/users/${id}`,
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    }).then((response) => {
                        expect(response.status).to.eq(200);
                        expect(response.body.name).to.eq(updateRequestBody.name);
                        expect(response.body.email).to.eq(updateRequestBody.email);
                        expect(response.body.status).to.eq(updateRequestBody.status);
                    }).then(() =>{
                        cy.request({
                            method: 'DELETE',
                            url: `https://gorest.co.in/public/v2/users/${id}`,
                            headers: {
                                'Authorization': `Bearer ${token}`,
                            },
                        }).then((response) => {
                            expect(response.status).to.eq(204);
                            expect(response.body).to.be.empty;
                        }).then(() => {
                            cy.request({
                                method: 'GET',
                                url: `https://gorest.co.in/public/v2/users/${id}`,
                                headers: {
                                    'Authorization': `Bearer ${token}`,
                                },
                                failOnStatusCode: false
                            }).then((response) => {
                                expect(response.status).to.eq(404);

                            })
                        })
                    })
                })
            })
        });
    });
});
