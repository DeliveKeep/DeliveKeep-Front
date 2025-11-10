import { Link } from 'react-router-dom';

const variants = {
    normal: 'btn-primary',
    long: 'btn-primary-long ',
}

export default function Button(
    {
        children,
        to,
        onClick,
        variant = 'normal',
        className = '',
        ...rest
    }
) {

    const combinedClassName = `
    ${variants[variant]}
    ${className}
  `;

    if (to) {
        return (
            <Link
                to={to}
                className={combinedClassName}
                {...rest}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            className={combinedClassName}
            type="button"
            {...rest} // Passa props extras (como 'type="submit"', 'disabled')
        >
            {children}
        </button>
    );
}