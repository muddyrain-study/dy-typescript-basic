import { printObj, descriptor } from './Descriptor';

@descriptor('文章')
class Article {
  @descriptor('标题')
  title: string;

  @descriptor('内容')
  content: string;

  @descriptor('日期')
  date: Date;
}

const ar = new Article();
ar.title = 'xxxx';
ar.content = '嘻嘻嘻';
ar.date = new Date();

printObj(ar);
