

function Header() {
    return (
        <div className="d-flex justify-content-between align-items-center mb-4 p-3 rounded-3 shadow-sm bg-light">
            <div>
                <h1 className="fs-3 fw-semibold mb-1 smooth-title">
                    Hello, Chhavi! 
                </h1>
                <p className="text-muted mb-0 smooth-text">
                    Ready for your next adventure?
                </p>
            </div>
            <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #FFC107, #FF9800)',
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: '1.2rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
            >
                C
            </div>
        </div>
    );
}

export default Header;