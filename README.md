# DeepThoughts

**API Task for DeepThoughts**

![image](https://github.com/Lalit572/DeepThoughts/assets/106988770/9882442a-96f1-4060-9524-bb0e4bc8076a)

**Task 1**

![image](https://github.com/Lalit572/DeepThoughts/assets/106988770/dbe1212d-2bd3-4f32-9f99-fb15f794d81c)

![image](https://github.com/Lalit572/DeepThoughts/assets/106988770/8d2dc7cb-e2c0-42e6-8780-2273964771fe)

![image](https://github.com/Lalit572/DeepThoughts/assets/106988770/44cb0760-9ac1-48ed-8267-bb46c4643c02)

**Task 2**

![image](https://github.com/Lalit572/DeepThoughts/assets/106988770/9915bcf5-b730-4ddd-b6a8-4c741348ba5c)

![image](https://github.com/Lalit572/DeepThoughts/assets/106988770/b638a70b-150a-43b0-b799-04f1c8b8de67)

![image](https://github.com/Lalit572/DeepThoughts/assets/106988770/3b67cccd-5852-4f8d-9195-faff622b7b91)

![image](https://github.com/Lalit572/DeepThoughts/assets/106988770/a4441cd9-dd6b-4993-b358-daee9e800aaf)

**Task 1 solution:-**
**STEP 1**

1. After cloning this repository install the required packages using npm install command in your command shell.
2.After that run the app using nodemon app.js this will start your server. and in another window run mongod command this will init your mongodb connection.
3.When the server is start you will get this message "**Server is listening on port 3000**".
![image](https://github.com/Lalit572/DeepThoughts/assets/106988770/aae84f6c-b708-4af2-b797-52016c1a94a0)

![image](https://github.com/Lalit572/DeepThoughts/assets/106988770/2a76fc7a-b5b2-46b0-8f19-fe2aaccbc363)

**STEP 2**
Now we can perform API operations:-

1.POST:-
URL:-http://localhost:3000/api/v3/app/events

using this api in postman set the request to post ,go to body and then select raw option and then you can place all the data that is being required and as mentioned in the 
decument.After click on send button it will show you message Event created sucesfully and you can check your document in mongodb compass.

![image](https://github.com/Lalit572/DeepThoughts/assets/106988770/b06a10a7-614a-4a2e-aa78-10e2824cfde7)

2.GET:- with id parameter 
URL :- http://localhost:3000/api/v3/app/events?id=648b44db4d7c6cffd475d0b80

Using this api you can get the required collection go to params and then give proper required id option ,after that select the get option and then click the send button 
you will get the required document on screen.

![image](https://github.com/Lalit572/DeepThoughts/assets/106988770/b6322054-9c4e-40c9-bdb8-49d8844e1637)

3.GET:- with type , limit , page parameter
URL:-http://localhost:3000/api/v3/app/events?type=latest&limit=5&page=1

Using this api you can get the required collection with pagination and limit , go to params and then give proper required type,limit,page options ,after that select the get option and then click the send button 
you will get the required document on screen.

![image](https://github.com/Lalit572/DeepThoughts/assets/106988770/2a10b757-6e4c-4146-ab14-ae8e65c8b20b)

4.PUT:-
URL:- http://localhost:3000/api/v3/app/events/60c5eb04e827470ef89209b2

This api will update the required document go to postman, select put option, then paste this api then this will find that document in the database and the update that
with the required code after sucesfully updated the document it will gives the message "**Data Updated sucesfully.**"

![image](https://github.com/Lalit572/DeepThoughts/assets/106988770/a76840f1-bc7f-4745-a562-5ad7b29bc1c1)

5.DELETE:-
URL:- http://localhost:3000/api/v3/app/events/60c5eb04e827470ef89209b2

This API will delete the required document by using the id after sucesfullly deletion it will gice the message "**Deleted Sucesfully!**"

![image](https://github.com/Lalit572/DeepThoughts/assets/106988770/851b48b2-fe74-4df4-aecc-8e87556d5785)


**Task 2 Solution:-**

**API Documentation:**

**1. Overview:**
The Nudge API allows users to create and manage nudges for events. A nudge is a notification or reminder that can be sent to users to encourage their participation or engagement with an event. 
This documentation provides details on the API structure, including the types of requests, base URL, API endpoints, payload structure, and descriptions of each API.

**2. Base URL:**
The base URL for all API endpoints is: https://api.example.com

**3. API Endpoints:**
The following API endpoints are available for managing nudges:

Create a Nudge

Endpoint: /api/v1/nudges
Method: POST
Description: Create a new nudge for an event.
Payload:
title (string): The title of the nudge.
image (file): An image file uploaded as the nudge cover.
sendTime (string): The time at which the nudge should be sent.
description (string): The description of the nudge.
icon (string): The icon for the nudge.
invitation (string): One-line invitation text for the nudge.
Response: Returns the created nudge object.
Get a Nudge

Endpoint: /api/v1/nudges/:id
Method: GET
Description: Get details of a specific nudge.
Parameters:
id (string): The unique identifier of the nudge.
Response: Returns the nudge object.
Update a Nudge

Endpoint: /api/v1/nudges/:id
Method: PUT
Description: Update an existing nudge.
Parameters:
id (string): The unique identifier of the nudge.
Payload: Same as the payload for creating a nudge.
Response: Returns the updated nudge object.
Delete a Nudge

Endpoint: /api/v1/nudges/:id
Method: DELETE
Description: Delete a nudge.
Parameters:
id (string): The unique identifier of the nudge.
Response: Returns a success message if the deletion is successful.

**4. Example Nudge Object Data Model:**

{
  "_id": "648b410f979e22dd62669481",
  "title": "Sample Nudge",
  "image": "sample_image.jpg",
  "sendTime": "2023-06-16T09:00:00Z",
  "description": "Sample nudge description",
  "icon": "sample_icon.png",
  "invitation": "Join us for the event!"
}

**5. CRUD Operations:**
The API supports the following CRUD (Create, Read, Update, Delete) operations for managing nudges:

Create a Nudge:

Send a POST request to the /api/v1/nudges endpoint with the required payload fields.
The response will contain the created nudge object.
Get a Nudge:

Send a GET request to the /api/v1/nudges/:id endpoint, providing the nudge's id parameter.
The response will contain the nudge object.
Update a Nudge:

Send a PUT request to the /api/v1/nudges/:id endpoint, providing the nudge's id parameter and the updated payload fields.
The


