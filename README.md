# React Programmable Chat

![](https://raw.githubusercontent.com/kevinthompson/react-programmable-chat/master/example.jpg)

This demo application was created as a supplement to a post on 
the [Twilio blog](https://www.twilio.com/blog).

## Required Credentials

* Account SID: [Twilio Console](https://www.twilio.com/console).
* API Key & Secret: [Twilio Console – API Keys](https://www.twilio.com/console/runtime/api-keys).
* Chat Service SID: [Twilio Console – Chat Dashboard](https://www.twilio.com/console/chat/dashboard).

## Setting Up The Application

**Clone the repository:**

```
git clone https://github.com/kevinthompson/react-programmable-chat.git
```

**Create your `.env` file:**

```
cd react-programmable-chat
cp .env.sample .env
```

**Define your environment variables:**

```
TWILIO_ACCOUNT_SID=
TWILIO_API_KEY=
TWILIO_API_SECRET=
TWILIO_CHAT_SERVICE_SID=
```

**Install application dependencies:**

```
npm install
```

**Start the token server in one terminal instance:**

```
node server.js
```

**Start the React application build process in another terminal instance:**

```
npm start
```
