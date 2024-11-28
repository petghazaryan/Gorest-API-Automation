import { faker } from '@faker-js/faker';

describe('Booking Tests', () => {

    it('Create a booking and retrieve it', () => {
        let token;
        let bookingid;
        const firstname = faker.person.firstName();
        const lastname = faker.person.lastName();

        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            body: {
                username: 'admin',
                password: 'password123',
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('token');
            token = response.body.token;
            cy.log('Token:', token);
        }).then(() => {
            cy.request({
                method: 'POST',
                url: 'https://restful-booker.herokuapp.com/booking',
                body: {
                    "firstname": firstname,
                    "lastname": lastname,
                    "totalprice": 111,
                    "depositpaid": true,
                    "bookingdates": {
                        "checkin": "2018-01-01",
                        "checkout": "2019-01-01"
                    },
                    "additionalneeds": "Breakfast"
                },
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body)
                    .to.have.property('bookingid');
                expect(response.body.booking)
                    .to.have.property('firstname');
                expect(response.body.booking)
                    .to.have.property('lastname');
                expect(response.body.booking.firstname)
                    .to.eq(firstname);
                expect(response.body.booking.lastname)
                    .to.eq(lastname);

                bookingid = response.body.bookingid;
                cy.log('Booking ID:', bookingid);
            })
        }).then(() => {
            cy.request({
                method: 'GET',
                url: `https://restful-booker.herokuapp.com/booking/${bookingid}`,  // Correct URL interpolation
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body)
                    .to.have.property('firstname', firstname);
                expect(response.body)
                    .to.have.property('lastname', lastname);
                expect(response.body)
                    .to.have.property('additionalneeds', 'Breakfast');

            });
        });
    });

});
