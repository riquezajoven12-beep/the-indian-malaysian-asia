import Link from 'next/link';

export default function LoginPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1A1A1A 0%, #8B1538 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
      <div style={{ width: '100%', maxWidth: '450px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Link href="/">
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 800, color: 'white' }}>The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span></span>
          </Link>
          <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', color: '#D4AF37', marginTop: '10px' }}>மலேசிய இந்தியர்கள்</p>
        </div>

        <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', textAlign: 'center', marginBottom: '30px' }}>Welcome Back</h1>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#333' }}>Email Address</label>
            <input type="email" placeholder="Enter your email" style={{ width: '100%', padding: '14px', border: '2px solid #ddd', borderRadius: '8px', fontSize: '1rem' }} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#333' }}>Password</label>
            <input type="password" placeholder="Enter your password" style={{ width: '100%', padding: '14px', border: '2px solid #ddd', borderRadius: '8px', fontSize: '1rem' }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666', cursor: 'pointer' }}>
              <input type="checkbox" /> Remember me
            </label>
            <Link href="/forgot-password" style={{ color: '#FF6B00', fontWeight: 500 }}>Forgot Password?</Link>
          </div>

          <button style={{ width: '100%', background: 'linear-gradient(135deg, #FF6B00, #8B1538)', color: 'white', padding: '16px', borderRadius: '8px', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: 'pointer', marginBottom: '20px' }}>
            Sign In
          </button>

          <p style={{ textAlign: 'center', color: '#666' }}>
            Do not have an account? <Link href="/register" style={{ color: '#FF6B00', fontWeight: 600 }}>Register</Link>
          </p>
        </div>

        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', marginTop: '30px' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.8)' }}>← Back to Home</Link>
        </p>
      </div>
    </div>
  );
}
