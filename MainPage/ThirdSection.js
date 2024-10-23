// Import React and necessary modules 
'use client';
import React, { useState } from 'react';
import tick from "@/MainPage/Images/tick.svg";
import Image from 'next/image';

// Styles for the component (converted to a JS object)
const styles = {
  ThirdSection: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '819px', // Full screen height
    flexShrink: 0,
    backgroundColor: '#1c1c1e',
    alignItems: 'center',
  },
  CYP: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'mluvka',
    fontSize: '25px',
    fontWeight: 800,
    lineHeight: 'normal',
    marginBottom: '20px',
  },
  Buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '30px',
  },
  activeButton: {
    backgroundColor: '#0062cc',
    color: '#fff',
    border: 'none',
    padding: '10px 30px',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: 700,
    cursor: 'pointer',
  },
  inactiveButton: {
    backgroundColor: '#666',
    color: '#fff',
    border: 'none',
    padding: '10px 30px',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: 700,
    cursor: 'pointer',
  },
  planCard: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    width: '300px',
    height :'600px',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    position: 'relative',
  },
  planCardHover: {
    transform: 'scale(1.05)',  // Scale the card slightly on hover
  },
  planCardActive: {
    transform: 'scale(1.1)',  // Larger scale on click
  },
  planHeader: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  planList: {
    listStyle: 'none',
    padding: '0',
    marginBottom: '100%',
   // Added to ensure proper spacing between list items
    display: 'flex',
    flexDirection: 'column', // Ensures that list items are vertical
    alignItems: 'center',
  },
  planListItem: {
    
    display: 'flex',
    alignItems:
    'center',
    fontSize: '16px',
    textAlign: 'left', // Ensure text is aligned to the left for better readability
    width: '100%', // Make sure the items take up the full width of the container
  },
  planIcon: {
    marginRight: '10px',
    width: '20px',
  },
  button: {
    backgroundColor: '#34C759',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#2daa48',
  }
};

// Functional component declaration
const Header = () => {
  const [selectedPlan, setSelectedPlan] = useState('Individual');

  return (
    <div style={styles.ThirdSection}>
      <p style={styles.CYP}>Choose Your Plan</p>

      <div style={styles.Buttons}>
        <button
          style={selectedPlan === 'Individual' ? styles.activeButton : styles.inactiveButton}
          onClick={() => setSelectedPlan('Individual')}
        >
          Individual
        </button>

        <button
          style={selectedPlan === 'Business' ? styles.activeButton : styles.inactiveButton}
          onClick={() => setSelectedPlan('Business')}
        >
          Business
        </button>
      </div>

      <div className="plan-container">
        {/* Plan Card */}
        <div style={styles.planCard}>
          <h2 style={styles.planHeader}>Free</h2>
          <ul style={styles.planList}>
            <li style={styles.planListItem}>
              <Image
                src={tick}
                alt="check icon"
                style={styles.planIcon}
              />
              Limited Practice Questions
            </li>
            <li style={styles.planListItem}>
              <Image
                src={tick}
                alt="check icon"
                style={styles.planIcon}
              />
              2 Full Length Test
            </li>
            <li style={styles.planListItem}>
              <Image
                src={tick}
                alt="check icon"
                style={styles.planIcon}
              />
              2 Full Length Test
            </li>
          </ul>
          <button style={styles.button}>Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
