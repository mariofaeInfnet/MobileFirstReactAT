import Comments from './Comments';
import Product from './Product';
import Questions from './Questions';
import Related from './Related';
import Seller from './Seller';

const PRODUCT = {
  image: 'https://www.gobeche.com.br/assets/uploads/loja/tabletes-chocolate-ao-leite-de-coco-gobeche-adocado-com-maltitol-9k1if-20210825204121.png',
  name: 'Chocolate ao Leite de Coco Gobeche',
  description: 'Chocolate ao Leite de Coco Gobeche é um produto de alta qualidade, feito com ingredientes',
  rate: 4.5,
  price: '10,00',
}

const COMMENTS = [
  {
    id: 1,
    name: 'João',
    date: '25/08/2021',
    comment: 'Muito bom, o produto é muito bom, muito recomendo!'
  },
  {
    id: 2,
    name: 'Maria',
    date: '25/08/2021',
    comment: 'Muito bom, o produto é muito bom, muito recomendo!'
  },
  {
    id: 3,
    name: 'Pedro',
    date: '25/08/2021',
    comment: 'Muito bom, o produto é muito bom, muito recomendo!'
  }
];

const SELLER = {
  name:'Alberto dos Santos',
  email:'alberto@email.com',
  rate:4.5,
  phone:'9994-5781',
  };

const QUESTIONS = [
  {
    name: "João",
    date: "2023-12-08",
    question: "Como criar um array em JavaScript?",
    answer: "Para criar um array em JavaScript, você pode usar a sintaxe [...]"
  },
  {
    name: "Maria",
    date: "2023-12-09",
    question: "Qual é a diferença entre let, const e var?",
    answer: "let, const e var são palavras-chave usadas para declarar variáveis em JavaScript..."
  },
  {
    name: "Pedro",
    date: "2023-12-10",
    question: "Como usar arrow functions em JavaScript?",
    answer: "As funções arrow são uma forma mais curta de escrever funções em JavaScript..."
  }
];

const RELATEDS = [
  {
    photo: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/784896-1000-1000/671037---bombom-sonho-de-valsa-lacta-21-5g.jpg?v=637832029960130000',
    name: 'Product 1',
    price: 19.99
  },
  {
    photo: 'https://media-cdn.tripadvisor.com/media/photo-s/17/84/67/95/nosso-novellini-e-um.jpg',
    name: 'Product 2',
    price: 29.99
  },
  {
    photo: 'https://imagem.band.com.br/61/f_384061.jpg',
    name: 'Product 3',
    price: 39.99
  }
];

export default function Content() {
  return (
    <>
      <Product
        {...PRODUCT}
        />
      <Seller
        {...SELLER}
        />
      <Comments
        comments={COMMENTS}
        />
      <Questions
        questions={QUESTIONS}
        />
      <Related
        relateds={RELATEDS}
        />
    </>
  );
}