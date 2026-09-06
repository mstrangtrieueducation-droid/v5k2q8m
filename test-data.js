const A = "assets/images/";
const TOTAL_POINTS = 50;

const choice = (id, prompt, options, answer, explanation, image = "") => ({
  id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1
});
const input = (id, prompt, answers, explanation, image = "") => ({
  id, type: "input", prompt, answers, explanation, image, points: 1
});

const sections = [
  {
    "key": "A",
    "label": "A",
    "title": "Look and circle the correct words.",
    "note": "Choose the word that matches each picture.",
    "points": 3,
    "questions": [
      {
        "id": "A1",
        "type": "choice",
        "prompt": "1.",
        "options": [
          "letter",
          "news"
        ],
        "answers": [
          "news"
        ],
        "explanation": "The picture shows a newspaper containing news.",
        "image": "assets/images/page1-img2-337x242.png",
        "points": 1
      },
      {
        "id": "A2",
        "type": "choice",
        "prompt": "2.",
        "options": [
          "text message",
          "e-mail"
        ],
        "answers": [
          "e-mail"
        ],
        "explanation": "The picture shows an e-mail open on a computer screen.",
        "image": "assets/images/page1-img3-338x242.png",
        "points": 1
      },
      {
        "id": "A3",
        "type": "choice",
        "prompt": "3.",
        "options": [
          "Internet",
          "Communication"
        ],
        "answers": [
          "Communication"
        ],
        "explanation": "The boy is using a phone to communicate with another person.",
        "image": "assets/images/page1-img5-337x242.png",
        "points": 1
      }
    ]
  },
  {
    "key": "B",
    "label": "B",
    "title": "Listen and complete the sentences.",
    "note": "Listen carefully and write the missing word.",
    "points": 3,
    "audio": "assets/audio/Listening-B.mp3",
    "questions": [
      {
        "id": "B1",
        "type": "input",
        "prompt": "1. I take the ___ to school every day.",
        "answers": [
          "bus"
        ],
        "explanation": "A bus is a form of transportation that can take students to school.",
        "image": "",
        "points": 1
      },
      {
        "id": "B2",
        "type": "input",
        "prompt": "2. We ___ every summer.",
        "answers": [
          "travel"
        ],
        "explanation": "Travel is the verb used for going from one place to another.",
        "image": "",
        "points": 1
      },
      {
        "id": "B3",
        "type": "input",
        "prompt": "3. I listen to music on the ___.",
        "answers": [
          "radio"
        ],
        "explanation": "A radio can broadcast music for people to listen to.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "C",
    "label": "C",
    "title": "Complete the words. Then match.",
    "note": "Each number has two answers: complete the word, then choose picture a, b, or c.",
    "points": 6,
    "questions": [
      {
        "id": "C1",
        "type": "pictureWord",
        "points": 2,
        "prompt": "1. t _ u _ k",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/page1-img6-212x190.png"
          },
          {
            "value": "b",
            "image": "assets/images/page1-img7-343x189.png"
          },
          {
            "value": "c",
            "image": "assets/images/page1-img8-256x191.png"
          }
        ],
        "parts": [
          {
            "key": "word",
            "label": "Complete the word",
            "type": "input",
            "answers": [
              "truck"
            ],
            "explanation": "Adding r and c completes the word truck."
          },
          {
            "key": "picture",
            "label": "Matching picture",
            "type": "pictureChoice",
            "answers": [
              "c"
            ],
            "explanation": "Picture c shows a truck."
          }
        ]
      },
      {
        "id": "C2",
        "type": "pictureWord",
        "points": 2,
        "prompt": "2. _ o r _ e",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/page1-img6-212x190.png"
          },
          {
            "value": "b",
            "image": "assets/images/page1-img7-343x189.png"
          },
          {
            "value": "c",
            "image": "assets/images/page1-img8-256x191.png"
          }
        ],
        "parts": [
          {
            "key": "word",
            "label": "Complete the word",
            "type": "input",
            "answers": [
              "horse"
            ],
            "explanation": "Adding h and s completes the word horse."
          },
          {
            "key": "picture",
            "label": "Matching picture",
            "type": "pictureChoice",
            "answers": [
              "a"
            ],
            "explanation": "Picture a shows a horse."
          }
        ]
      },
      {
        "id": "C3",
        "type": "pictureWord",
        "points": 2,
        "prompt": "3. _ i r _ l _ n e",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/page1-img6-212x190.png"
          },
          {
            "value": "b",
            "image": "assets/images/page1-img7-343x189.png"
          },
          {
            "value": "c",
            "image": "assets/images/page1-img8-256x191.png"
          }
        ],
        "parts": [
          {
            "key": "word",
            "label": "Complete the word",
            "type": "input",
            "answers": [
              "airplane"
            ],
            "explanation": "Adding a, p, and a completes the word airplane."
          },
          {
            "key": "picture",
            "label": "Matching picture",
            "type": "pictureChoice",
            "answers": [
              "b"
            ],
            "explanation": "Picture b shows an airplane."
          }
        ]
      }
    ]
  },
  {
    "key": "D",
    "label": "D",
    "title": "Circle the correct words.",
    "note": "Choose the verb form that makes each sentence correct.",
    "points": 3,
    "questions": [
      {
        "id": "D1",
        "type": "choice",
        "prompt": "1. I paint / painted a picture yesterday.",
        "options": [
          "paint",
          "painted"
        ],
        "answers": [
          "painted"
        ],
        "explanation": "Yesterday shows that the action happened in the past, so use painted.",
        "image": "",
        "points": 1
      },
      {
        "id": "D2",
        "type": "choice",
        "prompt": "2. She traveled / travels last month.",
        "options": [
          "traveled",
          "travels"
        ],
        "answers": [
          "traveled"
        ],
        "explanation": "Last month is a past-time expression, so use traveled.",
        "image": "",
        "points": 1
      },
      {
        "id": "D3",
        "type": "choice",
        "prompt": "3. He didn't mail / mailed the letter last week.",
        "options": [
          "mail",
          "mailed"
        ],
        "answers": [
          "mail"
        ],
        "explanation": "After didn't, use the base form of the verb: mail.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "E",
    "label": "E",
    "title": "Look and complete the sentences.",
    "note": "Use the verb in brackets. Add didn't when the picture shows that the action did not happen.",
    "points": 4,
    "questions": [
      {
        "id": "E1",
        "type": "input",
        "prompt": "1. They ___ to the library yesterday. (walk)",
        "answers": [
          "walked"
        ],
        "explanation": "Yesterday places the action in the past, so walk becomes walked.",
        "image": "assets/images/page2-img1-600x300.png",
        "points": 1
      },
      {
        "id": "E2",
        "type": "input",
        "prompt": "2. I ___ a movie on TV last night. (watch)",
        "answers": [
          "watched"
        ],
        "explanation": "Last night places the action in the past, so watch becomes watched.",
        "image": "assets/images/page2-img3-600x300.png",
        "points": 1
      },
      {
        "id": "E3",
        "type": "input",
        "prompt": "3. He ___ on the phone last night. (talk)",
        "answers": [
          "didn't talk",
          "did not talk"
        ],
        "explanation": "The picture does not show him talking on the phone. Use didn't + the base verb talk.",
        "image": "assets/images/page2-img2-600x300.png",
        "points": 1
      },
      {
        "id": "E4",
        "type": "input",
        "prompt": "4. We ___ soccer yesterday. (play)",
        "answers": [
          "didn't play",
          "did not play"
        ],
        "explanation": "The picture does not show them playing soccer. Use didn't + the base verb play.",
        "image": "assets/images/page2-img4-600x300.png",
        "points": 1
      }
    ]
  },
  {
    "key": "F",
    "label": "F",
    "title": "Write sentences about yesterday. Then write True or False.",
    "note": "Each number has two answers: write the complete sentence, then decide whether it matches the picture.",
    "points": 6,
    "questions": [
      {
        "id": "F1",
        "type": "paired",
        "points": 2,
        "prompt": "1. We / listen / to music",
        "image": "assets/images/page2-img5-525x375.png",
        "parts": [
          {
            "key": "sentence",
            "label": "Complete sentence",
            "type": "input",
            "answers": [
              "We listened to music.",
              "We listened to music"
            ],
            "explanation": "The action happened yesterday, so listen becomes listened."
          },
          {
            "key": "truth",
            "label": "True or False",
            "type": "choice",
            "options": [
              "True",
              "False"
            ],
            "answers": [
              "True"
            ],
            "explanation": "The picture shows two girls listening to music, so the sentence is True."
          }
        ]
      },
      {
        "id": "F2",
        "type": "paired",
        "points": 2,
        "prompt": "2. My sister / not clean / her room",
        "image": "assets/images/page2-img6-525x375.png",
        "parts": [
          {
            "key": "sentence",
            "label": "Complete sentence",
            "type": "input",
            "answers": [
              "My sister didn't clean her room.",
              "My sister didn't clean her room",
              "My sister did not clean her room.",
              "My sister did not clean her room"
            ],
            "explanation": "For a negative past action, use didn't + the base verb clean."
          },
          {
            "key": "truth",
            "label": "True or False",
            "type": "choice",
            "options": [
              "True",
              "False"
            ],
            "answers": [
              "True"
            ],
            "explanation": "The room is still messy, so the sentence is True."
          }
        ]
      },
      {
        "id": "F3",
        "type": "paired",
        "points": 2,
        "prompt": "3. I / watch / TV / with my friend",
        "image": "assets/images/page2-img7-525x375.png",
        "parts": [
          {
            "key": "sentence",
            "label": "Complete sentence",
            "type": "input",
            "answers": [
              "I watched TV with my friend.",
              "I watched TV with my friend"
            ],
            "explanation": "The action happened yesterday, so watch becomes watched."
          },
          {
            "key": "truth",
            "label": "True or False",
            "type": "choice",
            "options": [
              "True",
              "False"
            ],
            "answers": [
              "False"
            ],
            "explanation": "The picture shows the children playing soccer, not watching TV, so the sentence is False."
          }
        ]
      }
    ]
  },
  {
    "key": "G",
    "label": "G",
    "title": "Look and circle the correct words.",
    "note": "Choose the word that matches each picture.",
    "points": 3,
    "questions": [
      {
        "id": "G1",
        "type": "choice",
        "prompt": "1.",
        "options": [
          "clerk",
          "poor"
        ],
        "answers": [
          "clerk"
        ],
        "explanation": "The picture shows a store clerk working at a counter.",
        "image": "assets/images/page3-img5-525x375.png",
        "points": 1
      },
      {
        "id": "G2",
        "type": "choice",
        "prompt": "2.",
        "options": [
          "crowded",
          "arrive"
        ],
        "answers": [
          "crowded"
        ],
        "explanation": "There are many people close together, so the place is crowded.",
        "image": "assets/images/page3-img6-525x375.png",
        "points": 1
      },
      {
        "id": "G3",
        "type": "choice",
        "prompt": "3.",
        "options": [
          "ask",
          "enter"
        ],
        "answers": [
          "enter"
        ],
        "explanation": "The girl is going through the doorway, so she is entering the room.",
        "image": "assets/images/page3-img11-525x375.png",
        "points": 1
      }
    ]
  },
  {
    "key": "H",
    "label": "H",
    "title": "Complete the sentences.",
    "note": "Use the words in the box: ask, check, clock, couch, sick, visit. One word is extra.",
    "points": 5,
    "questions": [
      {
        "id": "H1",
        "type": "input",
        "prompt": "1. I go to the doctor when I'm ___.",
        "answers": [
          "sick"
        ],
        "explanation": "People often go to a doctor when they are sick.",
        "image": "",
        "points": 1
      },
      {
        "id": "H2",
        "type": "input",
        "prompt": "2. I need to ___ you a question.",
        "answers": [
          "ask"
        ],
        "explanation": "The correct expression is ask someone a question.",
        "image": "",
        "points": 1
      },
      {
        "id": "H3",
        "type": "input",
        "prompt": "3. We ___ our grandparents every weekend.",
        "answers": [
          "visit"
        ],
        "explanation": "Visit means to go and spend time with someone.",
        "image": "",
        "points": 1
      },
      {
        "id": "H4",
        "type": "input",
        "prompt": "4. She sat on the ___.",
        "answers": [
          "couch"
        ],
        "explanation": "A couch is a piece of furniture that people sit on.",
        "image": "",
        "points": 1
      },
      {
        "id": "H5",
        "type": "input",
        "prompt": "5. There is a ___ in my classroom.",
        "answers": [
          "clock"
        ],
        "explanation": "A clock shows the time. The unused word is check.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "I",
    "label": "I",
    "title": "Listen and check the correct picture. Write the word.",
    "note": "Each number has two answers: choose picture a or b, then write the word.",
    "points": 6,
    "audio": "assets/audio/Listening-I.mp3",
    "questions": [
      {
        "id": "I1",
        "type": "pictureWord",
        "points": 2,
        "prompt": "1.",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/page3-img3-300x300.png"
          },
          {
            "value": "b",
            "image": "assets/images/page3-img4-300x300.png"
          }
        ],
        "parts": [
          {
            "key": "picture",
            "label": "Correct picture",
            "type": "pictureChoice",
            "answers": [
              "b"
            ],
            "explanation": "The audio describes a chair, and picture b shows an armchair."
          },
          {
            "key": "word",
            "label": "Write the word",
            "type": "input",
            "answers": [
              "chair"
            ],
            "explanation": "The correct word is chair."
          }
        ]
      },
      {
        "id": "I2",
        "type": "pictureWord",
        "points": 2,
        "prompt": "2.",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/page3-img7-300x300.png"
          },
          {
            "value": "b",
            "image": "assets/images/page3-img8-300x300.png"
          }
        ],
        "parts": [
          {
            "key": "picture",
            "label": "Correct picture",
            "type": "pictureChoice",
            "answers": [
              "a"
            ],
            "explanation": "The audio describes a lamp, and picture a shows a lamp."
          },
          {
            "key": "word",
            "label": "Write the word",
            "type": "input",
            "answers": [
              "lamp"
            ],
            "explanation": "The correct word is lamp."
          }
        ]
      },
      {
        "id": "I3",
        "type": "pictureWord",
        "points": 2,
        "prompt": "3.",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/page3-img9-300x300.png"
          },
          {
            "value": "b",
            "image": "assets/images/page3-img10-300x300.png"
          }
        ],
        "parts": [
          {
            "key": "picture",
            "label": "Correct picture",
            "type": "pictureChoice",
            "answers": [
              "a"
            ],
            "explanation": "The audio describes a sink, and picture a shows a sink."
          },
          {
            "key": "word",
            "label": "Write the word",
            "type": "input",
            "answers": [
              "sink"
            ],
            "explanation": "The correct word is sink."
          }
        ]
      }
    ]
  },
  {
    "key": "J",
    "label": "J",
    "title": "Answer the questions. Use the words in the box.",
    "note": "Use the words: baked cookies, soup, to the library, by car. One phrase is extra.",
    "points": 3,
    "questions": [
      {
        "id": "J1",
        "type": "input",
        "prompt": "1. What did they cook?",
        "answers": [
          "They cooked soup.",
          "They cooked soup",
          "Soup."
        ],
        "explanation": "The question asks what they cooked, so the complete answer is: They cooked soup.",
        "image": "",
        "points": 1
      },
      {
        "id": "J2",
        "type": "input",
        "prompt": "2. What did they do?",
        "answers": [
          "They baked cookies.",
          "They baked cookies",
          "Baked cookies."
        ],
        "explanation": "The action shown is baking cookies, so answer: They baked cookies.",
        "image": "",
        "points": 1
      },
      {
        "id": "J3",
        "type": "input",
        "prompt": "3. How did they travel?",
        "answers": [
          "They traveled by car.",
          "They traveled by car",
          "They travelled by car.",
          "They travelled by car",
          "By car."
        ],
        "explanation": "How asks about the means of transportation, so answer: They traveled by car.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "K",
    "label": "K",
    "title": "Look and answer the questions.",
    "note": "Write a complete sentence for each picture.",
    "points": 2,
    "questions": [
      {
        "id": "K1",
        "type": "input",
        "prompt": "1. What did she do?",
        "answers": [
          "She listened to music.",
          "She listened to music"
        ],
        "explanation": "The picture shows her listening to music, so use the past form listened.",
        "image": "assets/images/page4-img1-600x300.png",
        "points": 1
      },
      {
        "id": "K2",
        "type": "input",
        "prompt": "2. What did they do?",
        "answers": [
          "They baked cupcakes.",
          "They baked cupcakes"
        ],
        "explanation": "The picture shows them baking cupcakes, so use the past form baked.",
        "image": "assets/images/page4-img2-600x300.png",
        "points": 1
      }
    ]
  },
  {
    "key": "L",
    "label": "L",
    "title": "Write the questions. Look at the pictures and answer.",
    "note": "Each number has two answers: write the complete question, then write the complete answer.",
    "points": 6,
    "questions": [
      {
        "id": "L1",
        "type": "paired",
        "points": 2,
        "prompt": "1. he / Did / dinner / cook",
        "image": "assets/images/page4-img3-304x218.png",
        "parts": [
          {
            "key": "question",
            "label": "Complete question",
            "type": "input",
            "answers": [
              "Did he cook dinner?",
              "Did he cook dinner"
            ],
            "explanation": "A past yes/no question uses Did + subject + base verb: Did he cook dinner?"
          },
          {
            "key": "answer",
            "label": "Complete answer",
            "type": "input",
            "answers": [
              "No, he didn't.",
              "No, he didn't",
              "No, he did not.",
              "No, he did not"
            ],
            "explanation": "The picture shows him talking to a woman, not cooking dinner, so answer: No, he didn't."
          }
        ]
      },
      {
        "id": "L2",
        "type": "paired",
        "points": 2,
        "prompt": "2. playground / Did / walk / they / the / to",
        "image": "assets/images/page4-img4-306x219.png",
        "parts": [
          {
            "key": "question",
            "label": "Complete question",
            "type": "input",
            "answers": [
              "Did they walk to the playground?",
              "Did they walk to the playground"
            ],
            "explanation": "Put the words in question order: Did + they + walk + to the playground?"
          },
          {
            "key": "answer",
            "label": "Complete answer",
            "type": "input",
            "answers": [
              "Yes, they did.",
              "Yes, they did"
            ],
            "explanation": "The picture shows them walking to the playground, so answer: Yes, they did."
          }
        ]
      },
      {
        "id": "L3",
        "type": "paired",
        "points": 2,
        "prompt": "3. did / Jack and Jenny / What / do",
        "image": "assets/images/page4-img5-304x217.png",
        "parts": [
          {
            "key": "question",
            "label": "Complete question",
            "type": "input",
            "answers": [
              "What did Jack and Jenny do?",
              "What did Jack and Jenny do"
            ],
            "explanation": "A past information question uses What + did + subject + base verb: What did Jack and Jenny do?"
          },
          {
            "key": "answer",
            "label": "Complete answer",
            "type": "input",
            "answers": [
              "They played ball.",
              "They played ball",
              "Jack and Jenny played ball.",
              "Jack and Jenny played ball"
            ],
            "explanation": "The picture shows Jack and Jenny playing with a ball, so answer: They played ball."
          }
        ]
      }
    ]
  }
];
