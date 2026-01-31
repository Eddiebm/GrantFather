export default function Home() {
  return (
    <main style={{ padding: '50px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '48px' }}>GrantFather</h1>
      <p style={{ fontSize: '20px', color: '#666' }}>
        AI-Powered Biomedical Grant Platform
      </p>
      <br />
      <button style={{ 
        padding: '15px 30px', 
        fontSize: '18px',
        background: '#0070f3',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Get Started
      </button>
    </main>
  );
}
