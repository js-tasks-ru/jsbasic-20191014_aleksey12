/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  const ul = document.createElement('ul');
  for (let i = 0; i < friends.length; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = `${friends[i].firstName} ${friends[i].lastName}`;
    ul.append(li);
  }
  return ul;
}
