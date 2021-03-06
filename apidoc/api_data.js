define({ "api": [
  {
    "type": "delete",
    "url": "/auth",
    "title": "Request to delete a Pushy Token for the user",
    "name": "DeleteAuth",
    "group": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Valid JSON Web Token JWT</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true when the pushy token is deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400: Missing Parameters": [
          {
            "group": "400: Missing Parameters",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Missing required information&quot;</p>"
          }
        ],
        "404: User Not Found": [
          {
            "group": "404: User Not Found",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;user not found&quot;</p>"
          }
        ],
        "400: JSON Error": [
          {
            "group": "400: JSON Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;malformed JSON in parameters&quot;</p>"
          }
        ],
        "400: SQL Error": [
          {
            "group": "400: SQL Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the reported SQL error details</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/pushyregister.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/login",
    "title": "Request to sign a user in the system",
    "name": "GetAuth",
    "group": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>&quot;username:password&quot; uses Basic Auth</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true when the name is found and password matches</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Authentication successful!</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JSON Web Token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400: Missing Parameters": [
          {
            "group": "400: Missing Parameters",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Missing required information&quot;</p>"
          }
        ],
        "404: User Not Found": [
          {
            "group": "404: User Not Found",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;User not found&quot;</p>"
          }
        ],
        "400: Invalid Credentials": [
          {
            "group": "400: Invalid Credentials",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Credentials did not match&quot;</p>"
          }
        ],
        "400: SQL Error": [
          {
            "group": "400: SQL Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the reported SQL error details</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/login.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Request to resgister a user",
    "name": "PostAuth",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first",
            "description": "<p>a users first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last",
            "description": "<p>a users last name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>a users email *required unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>a users password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true when the name is inserted</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>the email of the user inserted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400: Missing Parameters": [
          {
            "group": "400: Missing Parameters",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Missing required information&quot;</p>"
          }
        ],
        "400: Username exists": [
          {
            "group": "400: Username exists",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Username exists&quot;</p>"
          }
        ],
        "400: Email exists": [
          {
            "group": "400: Email exists",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Email exists&quot;</p>"
          }
        ],
        "400: SQL Error": [
          {
            "group": "400: SQL Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the reported SQL error details</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/register.js",
    "groupTitle": "Auth"
  },
  {
    "type": "put",
    "url": "/auth",
    "title": "Request to insert a Pushy Token for the user",
    "name": "PutAuth",
    "group": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Valid JSON Web Token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>the Pushy Token of the user identified in the JWT</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true when the pushy token is inserted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400: Missing Parameters": [
          {
            "group": "400: Missing Parameters",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Missing required information&quot;</p>"
          }
        ],
        "404: User Not Found": [
          {
            "group": "404: User Not Found",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;user not found&quot;</p>"
          }
        ],
        "400: JSON Error": [
          {
            "group": "400: JSON Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;malformed JSON in parameters&quot;</p>"
          }
        ],
        "400: SQL Error": [
          {
            "group": "400: SQL Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the reported SQL error details</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/pushyregister.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/changePass/",
    "title": "Request to verify all demo entries in the DB",
    "name": "GetChangePass",
    "group": "ChangePass",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPass",
            "description": "<p>The new password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "Password",
            "description": "<p>has been changed</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404: Name Not Found": [
          {
            "group": "404: Name Not Found",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Name not found&quot;</p>"
          }
        ],
        "400: SQL Error": [
          {
            "group": "400: SQL Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the reported SQL error details</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/changePass.js",
    "groupTitle": "ChangePass"
  },
  {
    "type": "delete",
    "url": "/delete",
    "title": "existing chatroom",
    "name": "DeleteChatRooms",
    "group": "ChatRoom",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Valid JSON Web Token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>of the chatroom</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true when the chatroom is deleted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400: SQL Error": [
          {
            "group": "400: SQL Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the reported SQL error details</p>"
          }
        ],
        "400: JSON Error": [
          {
            "group": "400: JSON Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;malformed JSON in parameters&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/chatRoom.js",
    "groupTitle": "ChatRoom"
  },
  {
    "type": "put",
    "url": "/Change",
    "title": "the name of a chatroom",
    "name": "PutChatRoom",
    "group": "ChatRoom",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Valid JSON Web Token JWT</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true when the name is changed</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400: SQL Error": [
          {
            "group": "400: SQL Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the reported SQL error details</p>"
          }
        ],
        "400: JSON Error": [
          {
            "group": "400: JSON Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;malformed JSON in parameters&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/chatRoom.js",
    "groupTitle": "ChatRoom"
  },
  {
    "type": "delete",
    "url": "/chats/:chatId?/:email?",
    "title": "Request delete a user from a chat",
    "name": "DeleteChats",
    "group": "Chats",
    "description": "<p>Does not delete the user associated with the required JWT but instead delelets the user based on the email parameter.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "chatId",
            "description": "<p>the chat to delete the user from</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>the email of the user to delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true when the name is deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404: Chat Not Found": [
          {
            "group": "404: Chat Not Found",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;chatID not found&quot;</p>"
          }
        ],
        "404: Email Not Found": [
          {
            "group": "404: Email Not Found",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;email not found&quot;</p>"
          }
        ],
        "400: Invalid Parameter": [
          {
            "group": "400: Invalid Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Malformed parameter. chatId must be a number&quot;</p>"
          }
        ],
        "400: Duplicate Email": [
          {
            "group": "400: Duplicate Email",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;user not in chat&quot;</p>"
          }
        ],
        "400: Missing Parameters": [
          {
            "group": "400: Missing Parameters",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Missing required information&quot;</p>"
          }
        ],
        "400: SQL Error": [
          {
            "group": "400: SQL Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the reported SQL error details</p>"
          }
        ],
        "400: JSON Error": [
          {
            "group": "400: JSON Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;malformed JSON in parameters&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/chats.js",
    "groupTitle": "Chats"
  },
  {
    "type": "get",
    "url": "/chats/:chatId?",
    "title": "Request to get the emails of user in a chat",
    "name": "GetChats",
    "group": "Chats",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Valid JSON Web Token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "chatId",
            "description": "<p>the chat to look up.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rowCount",
            "description": "<p>the number of messages returned</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "members",
            "description": "<p>List of members in the chat</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "messages.email",
            "description": "<p>The email for the member in the chat</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404: ChatId Not Found": [
          {
            "group": "404: ChatId Not Found",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Chat ID Not Found&quot;</p>"
          }
        ],
        "400: Invalid Parameter": [
          {
            "group": "400: Invalid Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Malformed parameter. chatId must be a number&quot;</p>"
          }
        ],
        "400: Missing Parameters": [
          {
            "group": "400: Missing Parameters",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Missing required information&quot;</p>"
          }
        ],
        "400: SQL Error": [
          {
            "group": "400: SQL Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the reported SQL error details</p>"
          }
        ],
        "400: JSON Error": [
          {
            "group": "400: JSON Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;malformed JSON in parameters&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/chats.js",
    "groupTitle": "Chats"
  },
  {
    "type": "post",
    "url": "/chats",
    "title": "Request to add a chat",
    "name": "PostChats",
    "group": "Chats",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Valid JSON Web Token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>the name for the chat</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true when the name is inserted</p>"
          },
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "chatId",
            "description": "<p>the generated chatId</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400: Unknown user": [
          {
            "group": "400: Unknown user",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;unknown email address&quot;</p>"
          }
        ],
        "400: Missing Parameters": [
          {
            "group": "400: Missing Parameters",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Missing required information&quot;</p>"
          }
        ],
        "400: SQL Error": [
          {
            "group": "400: SQL Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the reported SQL error details</p>"
          }
        ],
        "400: Unknow Chat ID": [
          {
            "group": "400: Unknow Chat ID",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;invalid chat id&quot;</p>"
          }
        ],
        "400: JSON Error": [
          {
            "group": "400: JSON Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;malformed JSON in parameters&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/chats.js",
    "groupTitle": "Chats"
  },
  {
    "type": "put",
    "url": "/chats/:chatId?",
    "title": "Request add a user to a chat",
    "name": "PutChats",
    "group": "Chats",
    "description": "<p>Adds the user associated with the required JWT.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Valid JSON Web Token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "chatId",
            "description": "<p>the chat to add the user to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true when the name is inserted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404: Chat Not Found": [
          {
            "group": "404: Chat Not Found",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;chatID not found&quot;</p>"
          }
        ],
        "404: Email Not Found": [
          {
            "group": "404: Email Not Found",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;email not found&quot;</p>"
          }
        ],
        "400: Invalid Parameter": [
          {
            "group": "400: Invalid Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Malformed parameter. chatId must be a number&quot;</p>"
          }
        ],
        "400: Duplicate Email": [
          {
            "group": "400: Duplicate Email",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;user already joined&quot;</p>"
          }
        ],
        "400: Missing Parameters": [
          {
            "group": "400: Missing Parameters",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Missing required information&quot;</p>"
          }
        ],
        "400: SQL Error": [
          {
            "group": "400: SQL Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the reported SQL error details</p>"
          }
        ],
        "400: JSON Error": [
          {
            "group": "400: JSON Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;malformed JSON in parameters&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/chats.js",
    "groupTitle": "Chats"
  },
  {
    "type": "delete",
    "url": "/",
    "title": "Deletes a contact for a user",
    "name": "DeleteContacts",
    "group": "Connections",
    "description": "<p>Deletes a specific contact for a user.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Valid JSON Web Token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sender",
            "description": "<p>of the email to look up.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reciever",
            "description": "<p>of the email to look up.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "String",
            "description": "<p>of all valid emails.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400: SQL Error": [
          {
            "group": "400: SQL Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the reported SQL error details</p>"
          }
        ],
        "400: JSON Error": [
          {
            "group": "400: JSON Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;malformed JSON in parameters&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/connections.js",
    "groupTitle": "Connections"
  },
  {
    "type": "post",
    "url": "/",
    "title": "Read all existing connections for a user",
    "name": "PostContacts",
    "group": "Connections",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Valid JSON Web Token JWT</p>"
          }
        ]
      }
    },
    "description": "<p>Reqquest to get all the valid emails in the DB.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "String",
            "description": "<p>of all valid emails.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400: SQL Error": [
          {
            "group": "400: SQL Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the reported SQL error details</p>"
          }
        ],
        "400: JSON Error": [
          {
            "group": "400: JSON Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;malformed JSON in parameters&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/connections.js",
    "groupTitle": "Connections"
  },
  {
    "type": "put",
    "url": "/",
    "title": "Create a new Contact for a user.",
    "name": "PutContacts",
    "group": "Connections",
    "description": "<p>Adds a connection to a user.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Valid JSON Web Token JWT</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "Message",
            "description": "<p>stating Create is successful.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400: SQL Error": [
          {
            "group": "400: SQL Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the reported SQL error details</p>"
          }
        ],
        "400: JSON Error": [
          {
            "group": "400: JSON Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;malformed JSON in parameters&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/connections.js",
    "groupTitle": "Connections"
  },
  {
    "type": "get",
    "url": "/messages/:chatId?/:messageId?",
    "title": "Request to get chat messages",
    "name": "GetMessages",
    "group": "Messages",
    "description": "<p>Request to get the 10 most recent chat messages from the server in a given chat - chatId. If an optional messageId is provided, return the 10 messages in the chat prior to (and not including) the message containing MessageID.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "chatId",
            "description": "<p>the chat to look up.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "messageId",
            "description": "<p>(Optional) return the 15 messages prior to this message</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rowCount",
            "description": "<p>the number of messages returned</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "messages",
            "description": "<p>List of massages in the message table</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "messages.messageId",
            "description": "<p>The id for this message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "messages.email",
            "description": "<p>The email of the user who poseted this message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "messages.message",
            "description": "<p>The message text</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "messages.timestamp",
            "description": "<p>The timestamp of when this message was posted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404: ChatId Not Found": [
          {
            "group": "404: ChatId Not Found",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Chat ID Not Found&quot;</p>"
          }
        ],
        "400: Invalid Parameter": [
          {
            "group": "400: Invalid Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Malformed parameter. chatId must be a number&quot;</p>"
          }
        ],
        "400: Missing Parameters": [
          {
            "group": "400: Missing Parameters",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Missing required information&quot;</p>"
          }
        ],
        "400: SQL Error": [
          {
            "group": "400: SQL Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the reported SQL error details</p>"
          }
        ],
        "400: JSON Error": [
          {
            "group": "400: JSON Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;malformed JSON in parameters&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/messages.js",
    "groupTitle": "Messages"
  },
  {
    "type": "post",
    "url": "/messages",
    "title": "Request to add a message to a specific chat",
    "name": "PostMessages",
    "group": "Messages",
    "description": "<p>Adds the message from the user associated with the required JWT.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Valid JSON Web Token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "chatId",
            "description": "<p>the id of th chat to insert this message into</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>a message to store</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true when the name is inserted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400: Unknown user": [
          {
            "group": "400: Unknown user",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;unknown email address&quot;</p>"
          }
        ],
        "400: Missing Parameters": [
          {
            "group": "400: Missing Parameters",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Missing required information&quot;</p>"
          }
        ],
        "400: SQL Error": [
          {
            "group": "400: SQL Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the reported SQL error details</p>"
          }
        ],
        "400: Unknow Chat ID": [
          {
            "group": "400: Unknow Chat ID",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;invalid chat id&quot;</p>"
          }
        ],
        "400: JSON Error": [
          {
            "group": "400: JSON Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;malformed JSON in parameters&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/messages.js",
    "groupTitle": "Messages"
  },
  {
    "type": "post",
    "url": "/weather/current",
    "title": "Request current weather conditions from OpenWeatherMap.org",
    "name": "Weather_API",
    "group": "OpenWeatherMap",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>JWT provided from Auth post</p>"
          }
        ]
      }
    },
    "description": "<p>This end point is a pass through to the OpenWeatherMap API.</p>",
    "version": "0.0.0",
    "filename": "routes/weather.js",
    "groupTitle": "OpenWeatherMap"
  },
  {
    "type": "get",
    "url": "/weather/current",
    "title": "Request current weather conditions from OpenWeatherMap.org",
    "name": "Weather_API",
    "group": "OpenWeatherMap",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>JWT provided from Auth get</p>"
          }
        ]
      }
    },
    "description": "<p>This end point is a pass through to the OpenWeatherMap API.</p>",
    "version": "0.0.0",
    "filename": "routes/weather.js",
    "groupTitle": "OpenWeatherMap"
  },
  {
    "type": "get",
    "url": "/weather/hourly",
    "title": "Request hourly forecasted weather from OpenWeatherMap.org",
    "name": "Weather_API",
    "group": "OpenWeatherMap",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>JWT provided from Auth get</p>"
          }
        ]
      }
    },
    "description": "<p>This end point is a pass through to the OpenWeatherMap API.</p>",
    "version": "0.0.0",
    "filename": "routes/weather.js",
    "groupTitle": "OpenWeatherMap"
  },
  {
    "type": "post",
    "url": "/weather/forecast",
    "title": "Request forecasted weather from OpenWeatherMap.org",
    "name": "Weather_API",
    "group": "OpenWeatherMap",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>JWT provided from Auth post</p>"
          }
        ]
      }
    },
    "description": "<p>This end point is a pass through to the OpenWeatherMap API.</p>",
    "version": "0.0.0",
    "filename": "routes/weather.js",
    "groupTitle": "OpenWeatherMap"
  },
  {
    "type": "get",
    "url": "/weather/forecast",
    "title": "Request forecasted weather from OpenWeatherMap.org",
    "name": "Weather_API",
    "group": "OpenWeatherMap",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>JWT provided from Auth get</p>"
          }
        ]
      }
    },
    "description": "<p>This end point is a pass through to the OpenWeatherMap API.</p>",
    "version": "0.0.0",
    "filename": "routes/weather.js",
    "groupTitle": "OpenWeatherMap"
  },
  {
    "type": "get",
    "url": "/reverify/:email",
    "title": "Request to verify all demo entries in the DB",
    "name": "GetReverify",
    "group": "Reverify",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The email that is to be verified</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true when the name is verified</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "names",
            "description": "<p>List of names in the Demo DB</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "names.name",
            "description": "<p>The name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "names.message",
            "description": "<p>The message asscociated with the name</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404: Name Not Found": [
          {
            "group": "404: Name Not Found",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Name not found&quot;</p>"
          }
        ],
        "400: SQL Error": [
          {
            "group": "400: SQL Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the reported SQL error details</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/reverify.js",
    "groupTitle": "Reverify"
  },
  {
    "type": "get",
    "url": "/recover/:email?",
    "title": "Request to recover the account of the email provided",
    "name": "GetVerify",
    "group": "Verify",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email the recovery code will be sent to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true when the name is verified</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404: Name Not Found": [
          {
            "group": "404: Name Not Found",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Name not found&quot;</p>"
          }
        ],
        "400: SQL Error": [
          {
            "group": "400: SQL Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the reported SQL error details</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/recover.js",
    "groupTitle": "Verify"
  },
  {
    "type": "get",
    "url": "/reset/:token?",
    "title": "Request to reset the password of the user",
    "name": "GetVerify",
    "group": "Verify",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The email of the account to be reset</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true when the name is verified</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404: Name Not Found": [
          {
            "group": "404: Name Not Found",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Name not found&quot;</p>"
          }
        ],
        "400: SQL Error": [
          {
            "group": "400: SQL Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the reported SQL error details</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/reset.js",
    "groupTitle": "Verify"
  },
  {
    "type": "get",
    "url": "/verify/:name?",
    "title": "Request to verify all demo entries in the DB",
    "name": "GetVerify",
    "group": "Verify",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The email that is to be verified</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true when the name is verified</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "names",
            "description": "<p>List of names in the Demo DB</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "names.name",
            "description": "<p>The name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "names.message",
            "description": "<p>The message asscociated with the name</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404: Name Not Found": [
          {
            "group": "404: Name Not Found",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Name not found&quot;</p>"
          }
        ],
        "400: SQL Error": [
          {
            "group": "400: SQL Error",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the reported SQL error details</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/verify.js",
    "groupTitle": "Verify"
  }
] });
