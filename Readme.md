# Company Introduction

We are a UI design and mobile development studio based in San Jose, CA. We help organizations from startups to Fortune 1000 companies create memorable, human-centric mobile experiences. We are an official Google Vendor and partnered with Twilio, and Aruba Networks.

We do this by bringing out the best of their product, which includes applying emerging trends and technologies together for all of our partners from a wide variety of technology industries including e-commerce, drones, and Internet of Things.

# Job Description

We are looking for an ReactJS Developer responsible for the client side of our service. Your primary focus will be to implement a complete user interface in the form of a mobile and desktop web app, with a focus on performance. Your main duties will include creating React components and coupling them together into a functional app. The artistic design will be delivered to you, together with a Zeplin project, but we will ask for your help in regard to animations, CSS, and final HTML output. You will work in a team with the back-end developer, and communicate with the API using standard methods. A thorough understanding of all of the components of our platform and infrastructure is required.

## Responsibilities

  - Delivering a complete front end application
  - Ensuring high performance on mobile and desktop
  - Writing tested, idiomatic, and documented JavaScript, HTML and CSS
  - Coordinating the workflow between the graphic designer, the HTML coder, and yourself
  - Interfacing application data to Google Firebase
  - Communicating with external web services

## Skills and Qualifications

  - Proficiency with JavaScript and HTML5
  - Professional, precise communication skills
  - Deep knowledge of ReactJS practices and commonly used modules based on extensive work experience
  - Creating self-contained, reusable, and testable modules and components
  - Ensuring a clear dependency chain, in regard to the app logic as well as the file system
  - Ability to provide SEO solutions for single page apps
  - Extensive knowledge of CSS and JS methods for providing proficient visual effects and keeping the framerate above 30fps at all times
  - Thorough understanding of the responsibilities of the platform, database, API, caching layer, proxies, and other web services used in the system
  - Validating user actions on the client side and providing responsive feedback
  - Writing non-blocking code, and resorting to advanced techniques such as multi-threading, when needed
  - Creating custom, general use components which extend the elements and modules of core ReactJS
  - Experience with all levels of operation available to the front-end, such as from creating XHRs in vanilla JS to using a custom wrapper around $resource
  - Experience with building the infrastructure for serving the front-end app and assets
  - Architecting and automating the build process for production, using task runners or scripts
  - Documenting the code inline using JSDoc or other conventions
  - Writing extensive unit tests using automated TDD tasks
  - Creating e2e test suites for all components, and running them with Protractor (or a well reasoned alternative)
  - Creating configuration, build, and test scripts for Continuous Integration environments


## Our Values

Clients keep coming back to us because we are driven towards building good relationships by putting their needs first.

Whether it is helping the early stage startup get their foot off the ground or bringing new perspective for more established corporations, we believe in helping our clients as much as possible. 

We believe in creating quality design and development that is effective in achieving our client’s goals. Our work has helped our clients achieve worldwide recognition as a Best New App and mentions on large publications.

## Impekable Team

Our team is made up of creative, multi-talented individuals from different walks of life. Each member combines their knowledge of design, development, and problem-solving abilities to create a compelling user experience that suits every unique product.

Our tight-knit company culture ensures that our office is a place where creativity can thrive and our client’s ideas can prosper. 
SMS Powered Chat with Twilio’s

# Code Challenge:

![alt text](https://raw.githubusercontent.com/impekable/react-chat-challenge/branch/demo-chat-app.png)

Create a SMS powered chat the uses a similar design to the above screenshot (names can be replaced with phone numbers). The interface should be web based. It should allow to send and receive messages. A message history should be persisted into Twilio Sync. Inbound messages should update the UI in real-time using Twilio Sync Watchers.

Use this Codepen as a wireframe for work: https://codepen.io/impekable-chris/pen/varJrN

## Requirements:

- Send SMS message to any North America / United States phone number
- Receive and read SMS messages in chat UI
- Switch between text messages with different users
- Chat interface must be recreated with React Components
- Must use Twilio Programmable SMS
- React Material UI

## References:

- Twilio Programmable SMS: https://www.twilio.com/docs/sms/api
- Twilio Sync: https://www.twilio.com/docs/sync/api
- Twilio Quest: https://www.twilio.com/quest

# ReactJS Skeleton Project

This project represents a foundational structure for all Impekable projects to extend when constructing ReactJS web applications.

## Getting Started

For anyone unfamiliar with common NodeJS practices, having `npm` and running `npm install` after cloning the project is imperative.  This will download the associated NodeJS dependencies locally.  This process is well documented, so please refer to `npm` references on use and management of project dependencies.

## Structure

This project outlines a few structural elements that should be maintained.

### Document Root

The core of the application is implemented and rendered from `src` using the HTML content in `index.html` and loading `index.jsx` to initiate the application.  Typically, other than general base level navigation and layout management, you should not need to interact with this layer.  Commonly, adding external references, meta-tags and other elements important for non-javascript environments is performed here.

### Application Content

All dynamic application content should be stored in `src` or a client-named folder, e.g. `acme/` for ACME corporation.

#### Components

Components should serve as a cohesive container for distinctly related assets, and contrary to common practice, which uses a single `components` directory, Impekable recommends nested hierarchy indicative of relationship in implementation.  The root structure should be housed in `src/views` and demonstrated in this project for reference.  A top-level grouping by similar categorization is also encouraged, for example:

```bash
src/
  views/
    Body/
      AddressList/
      User/
        Profile/
        Settings/
        Image/
      ...
    Google/
      Map/
      Search/
    Twilio/
      Dialer/
      ...
```

The root of the component should contain a `.jsx` file that is named appropriately for the component, e.g. `/views/Header/Header.jsx`.

#### Actions

As indicated above, directly relative Actions should be contained in their respective component directory.  In the provided directory, this is demonstrated by the `Header` component.

```bash
src/
  views/
    Header/
      headerActions.js
```

#### Reducers

As indicated above, directly relative Reducers should be contained in their respective component directory.  In the provided directory, this is demonstrated by the `Header` component.

```bash
src/
  views/
    Header/
      headerReducer.js
```

#### Styles

As indicated above, directly relative Styles should be contained in their respective component directory.  In the provided directory, this is demonstrated by the `Header` component.

```bash
src/
  views/
    Header/
      Header.scss
```

### Global Actions, Reducers and Redux

For overall application mapping of Actions and Reducers, place the appropriate files in `src/store`.  `index.js` is reserved as the primary entry point and should be taylored to import all required Reducers, maintaining the provided loading definitions.

### Static Content

Any static content that requires non processing before delivery to the client, should be housed in `/static`.  This typically applies to baseline stylesheets and client provided assets such as logos, banners and other image artifacts.  Content in this directory will be directly referenced and no pre-processing is performed.
