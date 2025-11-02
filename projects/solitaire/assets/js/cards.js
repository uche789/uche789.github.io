const cardSuits = {
  hearts: {
    ace: '🂱',
    2: '🂲',
    3: '🂳',
    4: '🂴',
    5: '🂵',
    6: '🂶',
    7: '🂷',
    8: '🂸',
    9: '🂹',
    10: '🂺',
    jack: '🂻',
    queen: '🂽',
    king: '🂾'
  },
  diamonds: {
    ace: '🃁',
    2: '🃂',
    3: '🃃',
    4: '🃄',
    5: '🃅',
    6: '🃆',
    7: '🃇',
    8: '🃈',
    9: '🃉',
    10: '🃊',
    jack: '🃋',
    queen: '🃍',
    king: '🃎'
  },
  clubs: {
    ace: '🃑',
    2: '🃒',
    3: '🃓',
    4: '🃔',
    5: '🃕',
    6: '🃖',
    7: '🃗',
    8: '🃘',
    9: '🃙',
    10: '🃚',
    jack: '🃛',
    queen: '🃝',
    king: '🃞'
  },
  spades: {
    ace: '🂡',
    2: '🂢',
    3: '🂣',
    4: '🂤',
    5: '🂥',
    6: '🂦',
    7: '🂧',
    8: '🂨',
    9: '🂩',
    10: '🂪',
    jack: '🂫',
    queen: '🂭',
    king: '🂮'
  }
};

const cardLogos = {
  hearts: '♥️',
  diamonds: '♦️',
  clubs: '♣️',
  spades: '♠️'
}

const backOfPlayingCard = '🂠';

// const container = document.getElementById('game-container');

// for (const suit in cardSuits) {
//   for (const rank in cardSuits[suit]) {
//     const card = document.createElement('div');
//     card.className = 'card';
//     card.innerText = cardSuits[suit][rank];
//     if (suit === 'hearts' || suit === 'diamonds') {
//         card.style.color = 'red';
//     }
//     container.appendChild(card);
//   }
// }

// const card = document.createElement('div');
// card.className = 'card';
// card.innerText = backOfPlayingCard
// card.style.color = 'blue';
// container.appendChild(card);

function shuffle() {
  const cards = Object.values(cardSuits).flatMap(suit => {
    return Object.keys(suit).map(rank => ({
      rank: rank,
      symbol: suit[rank]
    }));
  });
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

function start() {
  console.log('Game started');
  const shuffledCards = shuffle();
  console.log(shuffledCards);
  const deck = [];
  const played = 28;
  const cardRow = document.getElementById('card-row');
  const cardColumns = cardRow.getElementsByClassName('card-col');
  for (let i = 0; i < played; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerText = backOfPlayingCard;
    card.style.color = 'blue';
    deck.push(card);
    const colIndex = Math.floor((Math.sqrt(8 * i + 1) - 1) / 2);
    cardColumns[colIndex].appendChild(card);
  }
}

start();