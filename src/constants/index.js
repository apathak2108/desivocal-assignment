import DonaldTrump from "../assets/donal-trump.png";
import PeterGriffin from "../assets/peter-griffin.png";
import KamlaHarris from "../assets/kamla-harris.png";
import RyanReynolds from "../assets/ryan-reynolds.png";
import HughJackman from "../assets/hugh-jackman.png";

export const STRINGS = {
  HEADER_TEXT: "2 free generations every day!",
  DESIVOCAL: "DesiVocal",
  HOME_CHARACTERS_SELECTION_TEXT:
    "Select two characters to start the conversation",
  HOME_BTN_TEXT: "Start Conversation",
  EMPTY_CHARACTERS_ERROR_MESSAGE: "Please select characters first !",
  START: "Start",
};

export const characters = [
  {
    character: DonaldTrump,
    name: "Donald Trump",
    conversation:
      "You know, I once tried to fight a giant chicken. Let's hope this conversation doesn't get as wild as that! But seriously, I'm all about the crazy adventures, so what's the wildest thing you've done?",
  },
  {
    character: PeterGriffin,
    name: "Peter Griffin",
    conversation:
      "I appreciate your sense of humor. It's important to keep things light, especially when we're dealing with tough situations. But I believe that even in the craziest moments, finding common ground is key. Let's see what we can agree on.",
  },
  {
    character: KamlaHarris,
    name: "Kamla Harris",
    conversation:
      "Whether it's on stage or in life, the best performances come from understanding each other. I've played a lot of roles, but the most important one is being myself. What about you? What's your story?",
  },
  {
    character: RyanReynolds,
    name: "Ryan Reynolds",
    conversation:
      "I've been in a lot of big rooms with a lot of big people, and let me tell you, I know how to get things done. But conversations like this, they're where the real deals are made. So tell me, what do you want to achieve here? I'm always looking for the next big win.",
  },
  {
    character: HughJackman,
    name: "Hugh Jackman",
    conversation:
      "I see you're still the king of deals. But you know, sometimes the best way to win is to keep things a bit lighter. After all, life's too short not to have a little fun along the way. What do you say we keep this conversation rolling with a bit of humor?",
  },
];
