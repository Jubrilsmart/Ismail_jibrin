import { Link } from 'react-router-dom';

const CustomLink = ({ to, children, ...props }) => {
  // Check if the "to" prop starts with http or https
  const isExternal = /^https?:\/\//.test(to);

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink