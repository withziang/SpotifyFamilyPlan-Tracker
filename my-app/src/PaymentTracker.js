import React, { useState, useEffect } from 'react';

function PaymentTracker() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    async function fetchData() {
      const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Spotify Payment Tracker</title>
      <style>
          body {
          margin: 0;
          padding: 0;
          background:    radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%);;
          font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          color: white;
          position: relative; /* Add position relative */
          height: 2000px;
          }
          .headbar {
          text-align: center;
          height: 70px;
          padding: 30px;
          }
         .secondarytitle{
          padding-left: 30px;
          font-size: 30px;
          font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          font-weight: 600;
         
         }
          .personalDetail {
          min-height: 500px;
          margin-top: 50px;
          }
          .words{
              color: rgb(175, 175, 175);
              font-size: 20px;
              padding-top: 100px;
          }
          .content-wrapper {
          text-align: center;
          min-height: 500px;
          }
          .highlighted{
              color: rgb(252, 252, 252);
              
          }
          .stars {
          position: fixed; /* Fixed position to cover the entire viewport */
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden; /* Ensure stars are not visible outside this area */
      
      }
      
      .star {
          --star-color: #ffffff; /* Change color to white */
          --star-tail-length: 50px;
          --star-tail-height: 2px;
          --star-width: 5px;
          --fall-duration: 15s;
          
          filter: none; 
          position: absolute;
          top: calc(var(--top-offset) * 1%);
          left: calc(var(--left-offset) * 1%);
          width: var(--star-width);
          height: var(--star-tail-height);
          background: linear-gradient(45deg, var(--star-color), transparent);
          border-radius: 50%;
          filter: drop-shadow(0 0 6px var(--star-color));
          animation: fall var(--fall-duration) linear infinite, tail-fade var(--fall-duration) ease-out infinite; /* Adjust fall delay if needed */
      }
      
      @keyframes fall {
          to {
              transform: translate(-200px, 200px); /* Move stars diagonally to the left and down */
          }
      }
      
      
      
      @keyframes tail-fade {
          0%, 50% {
              width: var(--star-tail-length);
              opacity: 1;
          }
      
          70%, 80% {
              width: 0;
              opacity: 0.4;
          }
      
          100% {
              width: 0;
              opacity: 0;
          }
      }
          .people{
              padding-left: 70px;
              padding-right: 70px;
              padding-top: 40px;
              padding-bottom: 40px;
          }
          .person{
              height:100px;
              display: flex;
              margin:30px;
              font-size: 18px;
              font-weight: 600;
          }
          .avatar {
              width: 40px; /* Adjust width as needed */
              height: 40px; /* Adjust height as needed */
              border: 2px solid #ffffff; /* Adjust color and width as needed */
              border-radius: 50%; /* Ensures it's a circle */
              text-align: center;
              display: flex;
              align-items: center; /* Vertically center items */
              justify-content: center; /* Horizontally center items */
              background-color: rgb(255, 255, 255);
              color: rgb(27, 73, 158);
              font-size: 25px;
              font-weight: 600;
              box-shadow: 0px 0px 3px 1px rgba(255, 255, 255, 0.589);
              margin: 30px;
              min-height: 40px;
              min-width: 40px;
        }
      </style>
      </head>
      <body>
      <!-- Star background -->
      <div class="stars">
          <div class="star" style="--top-offset: 10; --left-offset: 20; transform: rotate(-45deg);;"></div>
          <div class="star" style="--top-offset: 12; --left-offset: 70;transform: rotate(-45deg);"></div>
          <div class="star" style="--top-offset: 34; --left-offset: 64;transform: rotate(-45deg);"></div>
          <div class="star" style="--top-offset: 66; --left-offset: 90;transform: rotate(-45deg);"></div>
          <div class="star" style="--top-offset: 80; --left-offset: 75;transform: rotate(-45deg);"></div>
          <!-- Repeat other star divs here if needed -->
      </div>
      
      <div class="headbar">
          <h1>Spotify Payment Tracker</h1>
      </div>
      
      <div class="personalDetail">
          <div class="secondarytitle">Payment History</div>
          <div class="people">
              <div class="person person1">
                  <div class="avatar"> J</div>
                  Jason
              </div>
              <div class="person person2">
                  <div class="avatar"> Y</div>
                  Youdas
              </div>
              <div class="person person3">
                  <div class="avatar"> E</div>
                  Emily
              </div>
              <div class="person person4">
                  <div class="avatar"> T</div>
                  Tiff
              </div>
              <div class="person person5">
                  <div class="avatar"> I</div>
                  Issac
              </div>
          </div>
      </div>
      
      <div class="question">
          <div class="secondarytitle">How to pay</div>
          <div class="content-wrapper">
          <div class="secondarytitle words">Please e-transfer to email <span class="highlighted">ziang142019@gmail.com</span> for  <span class="highlighted">### * Constant</span> amount</div>
          </div>
      </div>
      </body>
      </html>
      

      `;

      setHtmlContent(htmlContent);
    }

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default PaymentTracker;
