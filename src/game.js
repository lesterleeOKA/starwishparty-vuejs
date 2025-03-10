export const games = [
  {
    id: 1,
    show: true,
    title: "Game 1: Matching",
    gameFolderName: "Matching",
    image: "image/matching_preview.png",
    hasPairs: true,
    gameSettings: {
      isMotionGame: false,
      removal: {
        enabled: false,
        show: false
      },
      model: {
        enabled: false,
        show: false
      }
    },
    pairs: [2, 3, 4, 5, 6],
    units: [
      /*{ value: "p1u3-a", label: "P1U3-Game A (Listening)" },*/
      { value: "p1u3-c", label: "P1U3-Game C (Picture)" },
      { value: "p1u4-c", label: "P1U4-Game C (Picture)" },
      { value: "p1u5-c", label: "P1U5-Game C (Picture)" },
      { value: "p1u6-c", label: "P1U6-Game C (Picture)" },
      { value: "p1u10-c", label: "P1U10-Game C (Picture)" },
      { value: "p2u3-b", label: "P2U3-Game B (Picture)" },
      { value: "p2u4-b", label: "P2U4-Game B (Picture)" },
      { value: "p2u5-b", label: "P2U5-Game B (Picture)" },
      { value: "p2u6-b", label: "P2U6-Game B (Picture)" },
    ],
    selectedPair: 2,
    selectedUnit: "p1u3-c",
  },
  {
    id: 2,
    show: true,
    title: "Game 2: Motion Phonics",
    gameFolderName: "Phonics",
    image: "image/screen_mpair.jpg",
    hasPairs: false,
    gameSettings: {
      isMotionGame: true,
      removal: {
        enabled: false,
        show: true
      },
      model: {
        enabled: true,
        show: true
      }
    },
    pairs: null,
    units: [
      { value: "p1u3-c", label: "P1U3-Game C (Picture)" },
      { value: "p1u4-c", label: "P1U4-Game C (Picture)" },
      { value: "p1u5-c", label: "P1U5-Game C (Picture)" },
      { value: "p1u6-c", label: "P1U6-Game C (Picture)" },
      { value: "p2u3-b", label: "P2U3-Game B (Picture)" },
      { value: "p2u4-b", label: "P2U4-Game B (Picture)" },
      { value: "p2u5-b", label: "P2U5-Game B (Picture)" },
      { value: "p2u6-b", label: "P2U6-Game B (Picture)" },
    ],
    selectedPair: null,
    selectedUnit: "p1u3-c",
  },
  {
    id: 3,
    show: true,
    title: "Game 3: Spelling",
    gameFolderName: "Snake",
    image: "image/screen_snake.jpg",
    hasPairs: false,
    gameSettings: {
      isMotionGame: false,
      removal: {
        enabled: false,
        show: false
      },
      model: {
        enabled: false,
        show: false
      }
    },
    pairs: null,
    units: [
      { value: "p1u1-d", label: "P1U1-Game D (Picture)" },
      { value: "p1u2-d", label: "P1U2-Game D (Picture)" },
      { value: "p1u3-d", label: "P1U3-Game D (Listening)" },
      { value: "p1u5-d", label: "P1U5-Game D (Listening)" },
      { value: "p1u6-d", label: "P1U6-Game D (Picture)" },
      { value: "p2u2-b", label: "p2u2-Game B (Picture)" },
      { value: "p2u3-d", label: "p2u3-Game D (Listening)" },
      { value: "p2u4-d", label: "p2u4-Game D (Listening)" },
      { value: "p2u5-d", label: "p2u5-Game D (Listening)" },
      { value: "p2u6-d", label: "p2u6-Game D (Listening)" },
      { value: "p3u1-c", label: "p3u1-Game C (Listening)" },
      { value: "p3u3-c", label: "p3u3-Game C (Listening)" }
    ],
    selectedPair: null,
    selectedUnit: "p1u1-d",
  },
  {
    id: 4,
    show: true,
    title: "Game 4: Typing",
    gameFolderName: "Typing",
    image: "image/screen_type.jpg",
    hasPairs: false,
    gameSettings: {
      isMotionGame: false,
      removal: {
        enabled: false,
        show: false
      },
      model: {
        enabled: false,
        show: false
      }
    },
    pairs: null,
    units: [
      { value: "p1u1-b", label: "P1U1-Game B (Type)" },
      { value: "p1u2-b", label: "P1U2-Game B (Type)" },
      { value: "p1u3-b", label: "P1U3-Game B (Type)" },
      { value: "p1u4-b", label: "P1U4-Game B (Type)" },
      { value: "p1u5-b", label: "P1U5-Game B (Type)" },
      { value: "p1u6-b", label: "P1U6-Game B (Type)" }
    ],
    selectedPair: null,
    selectedUnit: "p1u1-b",
  },
  {
    id: 5,
    show: true,
    title: "Game 5: Motion Spelling",
    gameFolderName: "MotionSpelling",
    image: "image/screen_mspell.jpg",
    hasPairs: false,
    gameSettings: {
      isMotionGame: true,
      removal: {
        enabled: false,
        show: true
      },
      model: {
        enabled: true,
        show: true
      }
    },
    pairs: null,
    units: [
      { value: "p2u2-d", label: "P2U2-Game D (Listening)" },
      { value: "p2u3-c", label: "P2U3-Game C (Listening)" },
      { value: "p2u6-c", label: "P2U6-Game C (Picture)" },
      { value: "p3u2-c", label: "P3U2-Game C (Listening)" },
      { value: "p3u5-c", label: "P3U5-Game C (Listening)" },
      { value: "p5u3-c", label: "P5U3-Game C (Picture)" }
    ],
    selectedPair: null,
    selectedUnit: "p2u2-d",
  },
  {
    id: 6,
    show: true,
    title: "Game 6: Fruit Ninja",
    gameFolderName: "FruitNinja",
    image: "image/fruit_ninja.png",
    hasPairs: false,
    gameSettings: {
      isMotionGame: true,
      removal: {
        enabled: false,
        show: true
      },
      model: {
        enabled: true,
        show: true
      }
    },
    pairs: null,
    units: [
      { value: "p1u1-e", label: "P1U1-Game E (FillInBlank)" },
      { value: "p1u2-a", label: "P1U2-Game A (Listening)" },
      { value: "p2u3-e", label: "P2U3-Game E (Text)" }
    ],
    selectedPair: null,
    selectedUnit: "p1u1-e",
  },
  {
    id: 7,
    show: true,
    title: "Game 7: Motion Basket",
    gameFolderName: "MotionBasket",
    image: "image/mBasket_preview.png",
    hasPairs: false,
    gameSettings: {
      isMotionGame: true,
      removal: {
        enabled: false,
        show: false
      },
      model: {
        enabled: true,
        show: true
      }
    },
    pairs: null,
    units: [
      { value: "p1u4-e", label: "P1U4-Game E (Listening)"},
      { value: "p1u9-e", label: "P1U9-Game E (Text)"},
      { value: "p2u4-e", label: "P2U4-Game E (FillInBlank)" },
      { value: "p3u2-e", label: "P3U2-Game E (FillInBlank)" },
      { value: "p3Bu3-b", label: "P3BU3-Game B (Listening)" }
    ],
    selectedPair: null,
    selectedUnit: "p1u4-e",
  },
  {
    id: 8,
    show: true,
    title: "Game 8: Head To Win",
    gameFolderName: "HeadToWin",
    image: "image/mhead_preview.png",
    hasPairs: false,
    gameSettings: {
      isMotionGame: true,
      removal: {
        enabled: false,
        show: true
      },
      model: {
        enabled: true,
        show: true
      }
    },
    pairs: null,
    units: [
      { value: "p1u1-a", label: "P1U1-Game A (Listening)" },
      { value: "p1u5-e", label: "P1U5-Game E (Text)" },
      { value: "p2u1-e", label: "P2U1-Game E (Text)" },
      { value: "p2u6-e", label: "P2U6-Game E (Text)" }
      /*{ value: "p3bu1-b", label: "P3BU1-Game B (Listening)" }*/
    ],
    selectedPair: null,
    selectedUnit: "p1u1-a",
  },
  {
    id: 9,
    show: true,
    title: "Game 9: Cross The Floor",
    gameFolderName: "CrossTheFloor",
    image: "image/crossTheFloor_preview.png",
    hasPairs: false,
    gameSettings: {
      battle: {
        enabled: true,
        show: true
      },
      isMotionGame: false,
      removal: {
        enabled: false,
        show: false
      },
      model: {
        enabled: false,
        show: false
      }
    },
    pairs: null,
    units: [
      { value: "p2u2-e", label: "P2U2-Game E (Text)" },
      { value: "p2u5-e", label: "P2U5-Game E (Text)" },
      { value: "p3Bu2-b", label: "P3Bu2-Game B (Picture)" }
    ],
    selectedPair: null,
    selectedUnit: "p2u2-e",
  },
  {
    id: 10,
    show: true,
    title: "Game 10: Word Blitz",
    gameFolderName: "WordBlitz",
    image: "image/wordBlitz_preview.png",
    hasPairs: false,
    gameSettings: {
      battle: {
        enabled: true,
        show: true
      },
      isMotionGame: false,
      removal: {
        enabled: false,
        show: false
      },
      model: {
        enabled: false,
        show: false
      }
    },
    pairs: null,
    units: [
      { value: "p1u2-e", label: "P1U2-Game E (FillInBlank)" },
      { value: "p1u4-d", label: "P1U4-Game D (Picture)" },
      { value: "p1u6-e", label: "P1U6-Game E (FillInBlank)" },
      { value: "p2u1-c", label: "P2U1-Game C (Listening)" },
      { value: "p2u2-c", label: "P2U2-Game C (Listening)" },
      /*{ value: "p3u1-d", label: "P3U1-Game D (Listening)" }*/
    ],
    selectedPair: null,
    selectedUnit: "p1u2-e",
  },
  {
    id: 11,
    show: true,
    title: "Game 11: Bouncing",
    gameFolderName: "Bouncing",
    image: "image/bouncing_preview.png",
    hasPairs: false,
    gameSettings: {
      isMotionGame: false,
      removal: {
        enabled: false,
        show: false
      },
      model: {
        enabled: false,
        show: false
      }
    },
    pairs: null,
    units: [
      { value: "p1u1-a", label: "P1U1-Game A (Listening)" },
      { value: "p1u5-e", label: "P1U5-Game E (Text)" },
      /*{ value: "p6u1-c", label: "P6U1-Game C (Listening)" },
      { value: "p6u6-c", label: "P6U6-Game C (Picture)" }*/
    ],
    selectedPair: null,
    selectedUnit: "p1u1-a",
  },
  {
    id: 12,
    show: true,
    title: "Game 12: Jump To Win",
    gameFolderName: "JumpToWin",
    image: "image/jump_to_win_preview.png",
    hasPairs: false,
    gameSettings: {
      isMotionGame: false,
      removal: {
        enabled: false,
        show: false
      },
      model: {
        enabled: false,
        show: false
      }
    },
    pairs: null,
    units: [
      { value: "p1u7-g", label: "P1U7-Game G (FillInBlank)" },
      { value: "p6u1-c", label: "P6U1-Game C (Listening)" },
      { value: "p6u6-c", label: "P6U6-Game C (Picture)" },
      { value: "p6bu1-c", label: "P6bU1-Game C (Listening)" },
      { value: "p6bu2-c", label: "P6bU2-Game C (Picture)" },
      { value: "p6bu3-c", label: "P6bU3-Game C (Listening)" },
      { value: "p6bu4-c", label: "P6bU4-Game C (Picture)" },
      { value: "p6bu6-c", label: "P6bU6-Game C (Picture)" }
    ],
    selectedPair: null,
    selectedUnit: "p1u7-g",
  },
  {
    id: 13,
    show: true,
    title: "Game 13: Spell Together",
    gameFolderName: "SpellTogether",
    image: "image/spellTogether_preview.png",
    hasPairs: false,
    gameSettings: {
      isMotionGame: false,
      removal: {
        enabled: false,
        show: false
      },
      model: {
        enabled: false,
        show: false
      }
    },
    pairs: null,
    units: [
      { value: "p1u1-c", label: "P1U1-Game C (Picture)" },
      { value: "p1u7-h", label: "P1U7-Game H (Picture)" }
    ],
    selectedPair: null,
    selectedUnit: "p1u1-c",
  },
  {
    id: 14,
    show: true,
    title: "Game 14: Rearrange Together",
    gameFolderName: "RearrangeTogether",
    image: "image/RearrangeTogether_preview.png",
    hasPairs: false,
    gameSettings: {
      isMotionGame: false,
      removal: {
        enabled: false,
        show: false
      },
      model: {
        enabled: false,
        show: false
      }
    },
    pairs: null,
    units: [
      { value: "p1u8-i", label: "P1U8-Game I (Text)" }
    ],
    selectedPair: null,
    selectedUnit: "p1u8-i",
  },
  //小王子系列///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    id: 25,
    show: true,
    title: "Starwish Game A",
    gameFolderName: "StarwishGame_a",
    image: "image/starwish_game_a.png",
    hasPairs: false,
    gameSettings: {
      isMotionGame: false,
      removal: {
        enabled: false,
        show: false
      },
      model: {
        enabled: false,
        show: false
      }
    },
    pairs: null,
    units: [
      { value: null, label: "none" }
    ],
    selectedPair: null,
    selectedUnit: null,
  },
  {
    id: 28,
    show: true,
    title: "Starwish Game D",
    gameFolderName: "StarwishGame_d",
    image: "image/starwish_game_d.png",
    hasPairs: false,
    gameSettings: {
      isOldGame: {
        dirFolder: "/RainbowOne/webapp/2.8/gamefile/OKAGames/StarwishGame_d/?unitkey=1"
      },
      isMotionGame: false,
      removal: {
        enabled: false,
        show: false
      },
      model: {
        enabled: false,
        show: false
      }
    },
    pairs: null,
    units: [
      { value: null, label: "none" }
    ],
    selectedPair: null,
    selectedUnit: null,
  },
  {
    id: 29,
    show: true,
    title: "Starwish Game E",
    gameFolderName: "StarwishGame_e",
    image: "image/starwish_game_e.png",
    hasPairs: false,
    gameSettings: {
        isMotionGame: false,
        removal: {
            enabled: false,
            show: false
        },
        model: {
            enabled: false,
            show: false
        }
    },
    pairs: null,
    units: [
        {
            value: null,
            label: "none"
        }
    ],
    selectedPair: null,
    selectedUnit: null
  },
  {
    id: 30,
    show: true,
    title: "Starwish Game F",
    gameFolderName: "StarwishGame_f",
    image: "image/starwish_game_f.png",
    hasPairs: false,
    gameSettings: {
      isMotionGame: false,
      removal: {
        enabled: false,
        show: false
      },
      model: {
        enabled: false,
        show: false
      }
    },
    pairs: null,
    units: [
      { value: null, label: "none" }
    ],
    selectedPair: null,
    selectedUnit: null,
  },
  {
    id: 31,
    show: true,
    title: "Starwish Game G",
    gameFolderName: "StarwishGame_g",
    image: "image/starwish_game_g.png",
    hasPairs: false,
    gameSettings: {
      isMotionGame: false,
      removal: {
        enabled: false,
        show: false
      },
      model: {
        enabled: false,
        show: false
      }
    },
    pairs: null,
    units: [
      { value: null, label: "none" }
    ],
    selectedPair: null,
    selectedUnit: null,
  },
  {
    id: 32,
    show: true,
    title: "Starwish Game H",
    gameFolderName: "StarwishGame_h",
    image: "image/starwish_game_h.png",
    hasPairs: false,
    gameSettings: {
      isOldGame: {
        dirFolder: "/RainbowOne/webapp/2.8/gamefile/OKAGames/StarwishGame_h/?unitkey=1"
      },
      isMotionGame: false,
      removal: {
        enabled: false,
        show: false
      },
      model: {
        enabled: false,
        show: false
      }
    },
    pairs: null,
    units: [
      { value: null, label: "none" }
    ],
    selectedPair: null,
    selectedUnit: null,
  },
  {
    id: 34,
    show: true,
    title: "Starwish Game J",
    gameFolderName: "StarwishGame_j",
    image: "image/starwish_game_j.png",
    hasPairs: false,
    gameSettings: {
      isMotionGame: false,
      removal: {
        enabled: false,
        show: false
      },
      model: {
        enabled: false,
        show: false
      }
    },
    pairs: null,
    units: [
      { value: null, label: "none" }
    ],
    selectedPair: null,
    selectedUnit: null,
  }
];
