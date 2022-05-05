import md5 from 'md5'

export function Gravatar(param) {
  const linkGravatar =()=> `https://www.gravatar.com/avatar/${hash}?d=identicon`;
  /**
   * Avatar from Gravatar
   */
  const email = param;
  const hash = md5(email);

  //? const linkGravatar = `https://www.gravatar.com/avatar/${hash}?d=identicon`;

  const x = linkGravatar()
  return x;
}; 
