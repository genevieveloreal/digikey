
# DigiKey

DigiKey is a web app and API that provide a safe and secure way for Australians to share their data, as well as receive timely information that is relevant to their health, lifestyle and travel within Australia.

DigiKey believes that for all Australians to feel safe and connected, government data regarding their health and wellbeing should be standardized and accessible while placing full control of their personal information in the hands of the everyday Australian.

[Click here to view live demo](https://www.bigsunday.com.au)

[![Video Preview](https://i.imgur.com/cSZCWev.png)](https://www.youtube.com)

## Running the project locally
* Ensure you have node installed
* Run the **npm install** command to install the node modules
* Run the **npm run start** command to run the website locally
* Note: The API will not work locally

## Problems we identified
* Government data and communication across state governments is fragmented, which can cause great stress for Australians, especially neurodiverse people, or those with mental disabilities. This effect has been compounded by COVID-19.
* Frequently changing advice is hard on those who rely on routine. This has real health impacts.
* Data sharing and handling is crucial in the effort to contact trace and provide good health outcomes for Australians, but there is a lack of transparency surrounding what data is needed, and why.
* COVID-19 has made way for many identity theft issues and online scams, which vulnerable people are especially at risk of falling prey to.
* Some people might not like to share all of their personal information, but only data that is relevant to the situation.
* Some Governments have stopped releasing contact tracing locations, such as NSW. This is frustrating for residents, who want access to this data as it's relevant to their health and wellbeing. How might we tailor alerts and communications to only deliver it to those who need it?

![Girl using DigiKey](https://i.imgur.com/kqBPohA.png)

## How Digikey solves these problems
The solution is delivered in two parts: The DigiKey web app and the DigiKey API, which powers it.

## DigiKey web app
* Data dashboard to manage your personal data (add, update, delete).
* Encrypted ID Wallet. Users can select which personally identifying information they wish to share when checking in or signing in. The sign-in process is encrypted and signed with public keys so that only the authorised parties can access that information with the relevant private key.
* Easy and simple COVID-19 restrictions overview. The Digikey web app connects to the DigiKey API restrictions endpoint so users can view COVID-19 restrictions in any state, at the touch of a button.
* Check-in capability with QR scanner.
* View historic data sharing information through the Check-in History page. This provides users with an overview of who their data has been shared with, and what data has been shared.

![DigiKey device demo](https://i.imgur.com/glMyJrs.png)

![DigiKey dashboard demo](https://i.imgur.com/WJBojIT.png)

![DigiKey check-in demo](https://i.imgur.com/C6rZIle.gif)
![DigiKey restrictions demo](https://i.imgur.com/jjpsiiO.gif)

## DigiKey API
The purpose of the DigiKey API is to provide a platform for all Governments to make available current restrictions, notices and important information to all Australians in an accessible and standardised format.
Key features include:
* Active and historical COVID-19 contact tracing sites
* Vaccination information, including availability and booking locations
* Real-time restrictions, allowing all Australians to stay COVID-Safe
* Delivered in an open and scalable solution
The API will provide benefits to a number of industries such as Travel, Infrastructure, Healthcare, Aged Care and Education.

![DigiKey API structure](https://i.imgur.com/ozh5mXO.png)

## DigiKey Card
Some people simply don't have access to the internet. DigiKey also proposes a physical card for people who don't have phones or computers available. Australians could visit their local Australia Post, get their ID certified and fill out the form to select which data keys are shared by default.

The DigiKey card could then be used to physically check-in to businesses and organisations.

![DigiKey Card](https://i.imgur.com/aGXEnRy.png)

## Government Benefits
COVID-19 and our swift change to a more 'digital' economy has turned the spotlight on how we can better provide information to residents across Australia. The DigiKey site and API will result in increased awareness, improved health outcomes and provide benefits to a number of industries such as Travel, Infrastructure, Healthcare, Aged Care and Education.

Additionally, relevant and timely information will reduce fear and anxiety. No more checking lengthy contact tracing lists every morning! 🙂

As state borders open up, DigiKey will help Australians keep track of what restrictions are across different the states, and measures they can take to protect their health and wellbeing. DigiKey aims to achieve increased digital and information security, and better health outcomes for all Australians. Solutions like the DigiKey site are our path to freedom as we begin chart a course to the COVID-normal era.

![Reach out for DigiKey](https://i.imgur.com/BwnBvxb.png)

## Tech used
HTML, CSS, Material-UI, React, Express, Node.js

## Additional features and stretch goals
* Provide education resources around preventing identity theft and avoiding online scams
* GPS functionality to allow users to locate their nearest vaccination centre or COVID testing facility in real-time
* Integration with Government COVID testing database to allow users to see their test history and results

## That's all, folks!
Stay safe and stay healthy. See you next year ✨

## Team members | Big Sunday

👨‍💻 [Aaron Charlton](https://github.com/charltona) | Full Stack Developer

👨‍🎨 [Ivan von Christ](https://github.com/ivonchrist) | UX/UI & Video Designer

👩‍💻 [Genevieve Carter](https://github.com/genevieveloreal) | Web Developer

![Team members](https://i.imgur.com/2wZziOG.png)