// components/Footer.jsx
import React from 'react';
import Image from 'next/image';
import logo from '@/MainPage/Images/LogoWhite.svg'; // Ensure you place your logo image in the public folder
import facebookIcon from '@/MainPage/Images/facebook.png';
import instagramIcon from '@/MainPage/Images/instagram.png';
import youtubeIcon from '@/MainPage/Images/youtube.png';

const Footer = () => {
    const styles = {
        footer: {
            backgroundColor: '#1a1a1a',
            padding: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            color: '#fff',
        },
        footerLogo: {
            width: '100px',
        },
        footerColumns: {
            display: 'flex',
            gap: '100px',
        },
        footerColumn: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
        },
        footerColumnHeading: {
            marginBottom: '10px',
            fontSize: '16px',
            textTransform: 'uppercase',
            color: '#fff',
        },
        footerColumnLink: {
            color: '#ccc',
            textDecoration: 'none',
            fontSize: '14px',
        },
        footerColumnLinkHover: {
            color: '#fff',
        },
        footerContact: {
            textAlign: 'right',
        },
        footerContactText: {
            fontSize: '14px',
            lineHeight: '2',
        },
        footerBottom: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '20px',
            fontSize: '12px',
            color: '#aaa',
            borderTop: '1px solid #444',
            paddingTop: '20px',
        },
        footerBottomLink: {
            color: '#aaa',
            textDecoration: 'none',
        },
        socialIcons: {
            display: 'flex',
            gap: '10px',
        },
        sitemap: {
            display: 'flex',
            gap: '15px',
        },
    };

    return (
        <footer style={styles.footer}>
            <Image src={logo} alt="Cavers Logo" width={100} height={100} style={styles.footerLogo} />

            <div style={styles.footerColumns}>
                <div style={styles.footerColumn}>
                    <h3 style={styles.footerColumnHeading}>About Us</h3>
                    <a href="#" style={styles.footerColumnLink}>Test Series</a>
                    <a href="#" style={styles.footerColumnLink}>Careers</a>
                    <a href="#" style={styles.footerColumnLink}>Investors</a>
                    <a href="#" style={styles.footerColumnLink}>Sustainability</a>
                    <a href="#" style={styles.footerColumnLink}>Testimonials</a>
                    <a href="#" style={styles.footerColumnLink}>Terms & Conditions</a>
                </div>

                <div style={styles.footerColumn}>
                    <h3 style={styles.footerColumnHeading}>Customer Support</h3>
                    <a href="#" style={styles.footerColumnLink}>Contact Us</a>
                    <a href="#" style={styles.footerColumnLink}>Offers & Discount</a>
                    <a href="#" style={styles.footerColumnLink}>Privacy Policy</a>
                </div>
            </div>

            <div style={styles.footerContact}>
                <p style={styles.footerContactText}>Have questions about learning with Cavers?<br /> We're here to help!</p>
                <p>📞 <a href="tel:+918587882257" style={{ color: '#fff', textDecoration: 'none' }}>+91 8587 882 257</a></p>
            </div>

            <div style={styles.footerBottom}>
                <div style={styles.sitemap}>
                    <a href="#" style={styles.footerBottomLink}>Sitemap</a>
                    <a href="#" style={styles.footerBottomLink}>Disclaimers</a>
                </div>

                <div style={styles.socialIcons}>
                    <a href="#"><Image src={facebookIcon} alt="Facebook" width={24} height={24} /></a>
                    <a href="https://www.instagram.com/cavers.in/"><Image src={instagramIcon} alt="Instagram" width={24} height={24} /></a>
                    <a href="https://www.youtube.com/@CaversEducation"><Image src={youtubeIcon} alt="YouTube" width={24} height={24} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

