>EN

# E-commerce

Hi there! This is the final work we made in [Ada](https://ada.com.ar/). We had to do like a mini-[MercadoLibre](https://www.mercadolibre.com.ar/),
to retrieve the products that match and showing in our page. 

## Running the App

This project has two parts: the **front-end** and the **_back-end_**. 

### Back-end

Here, I used **Node.js** and **Express** framework to make the routes and make my API retrieve data in the Mercadolibres's API.

Dependencies: 

> - Axios
> - CookieParser
> - Cors
> - Debug 
> - Dotenv
> - Express
> - Morgan
> - Nodemon

Next, I did `npm install` to download `node_modules`. You too will have to do this if you pull my repositorie. 

#### PORT

I created an `.env` file to set a specific port, because the default PORT in express is `PORT=3000` and this was going to make 
conflict with **React.js** default port. So, I created the file and set the port to `PORT=8080`. 


#### Mounting the server

In my `package.json` file, I changed the scripts to look like this: 

```
 "scripts": {
    "start": "nodemon ./bin/www"
  }
```
So, when I start the server, I have to do `npm run start` or `npm start`.

### Front-end

In this part I used **React.js**:

```
npm create-react-app E-commerce
```

Once again, I had to do `npm install` to have my `node_modules` foulder.

#### Mounting the server

At this part there are no more things to change, and like in the back-end, I did

 ```
 npm run start 
  ```
 or 
  ```
 npm start
  ```
  
The last thing I did is to download the package **React-router-dom** which helped me to do my routes in **React.js**
```
npm install --save react-router
```
  
 ## That is it. Thanks so much for reading!

