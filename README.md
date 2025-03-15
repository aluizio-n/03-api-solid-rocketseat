# App  

GymPass-style app.  

## Functional Requirements (FRs)  

- [x] Users should be able to register;  
- [x] Users should be able to authenticate;  
- [ ] Users should be able to retrieve their logged-in profile;  
- [ ] Users should be able to get the number of check-ins they have made;  
- [ ] Users should be able to view their check-in history;  
- [ ] Users should be able to search for nearby gyms;  
- [ ] Users should be able to search for gyms by name;  
- [ ] Users should be able to check in at a gym;  
- [ ] It should be possible to validate a user's check-in;  

## Business Rules (BRs)  

- [x] A user should not be able to register with a duplicate email;  
- [ ] A user should not be able to check in more than once per day;  
- [ ] A user should not be able to check in unless they are within 100m of the gym;  
- [ ] A check-in can only be validated within 20 minutes after creation;  
- [ ] A check-in can only be validated by administrators;  
- [ ] A gym can only be registered by administrators;  

## Non-Functional Requirements (NFRs)  

- [x] User passwords must be encrypted;  
- [x] Application data must be persisted in a PostgreSQL database;  
- [ ] All data lists should be paginated with 20 items per page;  
- [ ] Users should be identified using JWT (JSON Web Token);
