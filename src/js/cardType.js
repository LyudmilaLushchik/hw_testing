export default function cardType(card) {
  if (card.startsWith('2')) {
    return 'mir';
  }

  if (card.startsWith('30') || card.startsWith('36') || card.startsWith('38')) {
    return 'diners_club';
  }

  if (card.startsWith('31') || card.startsWith('35')) {
    return 'jcb';
  }

  if (card.startsWith('34') || card.startsWith('37')) {
    return 'american_express';
  }

  if (card.startsWith('4')) {
    return 'visa';
  }

  if (card.startsWith('51') || card.startsWith('52') || card.startsWith('53') || card.startsWith('54') || card.startsWith('55')) {
    return 'mastercard';
  }

  if (card.startsWith('60')) {
    return 'discover';
  }
  return '';
}
