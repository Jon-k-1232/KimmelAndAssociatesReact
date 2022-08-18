import './ArticleContainer.css';

export default function ArticleContainer({ file }) {
  return (
    <div className='articleContainer'>
      <a className='articleATag' href={file.file} target='_blank' rel='noreferrer'>
        <img src={file.image} alt={file.alt} />
        <h3 id='fileDisplayName'>{file.displayName}</h3>
      </a>
    </div>
  );
}
