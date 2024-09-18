// src/pages/AwarenessPage.js

import React, { useState, useEffect } from 'react';
import FactsSlider from '../components/FactsSlider';

const facts = [
  "Did you know? The right to freedom of speech is a fundamental right.",
  "Fact: Legal aid is available to those who cannot afford it.",
  "Did you know? You have the right to a fair trial.",
  "Fact: Laws are in place to protect consumer rights.",
  "Did you know? The Constitution is the supreme law of the land."
];

const AwarenessPage = () => {
  

  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-16">
      <section className="mb-12">
        <FactsSlider facts={facts}/>
        <div className="relative mt-16">
          
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4 mt-64">Topics Related to Legal Awareness</h2>
        <ul className="list-disc pl-5 space-y-4">
          <li><a href="#topic1" className="text-blue-600 hover:underline">Understanding Your Rights</a></li>
          <li><a href="#topic2" className="text-blue-600 hover:underline">Legal Procedures and Processes</a></li>
          <li><a href="#topic3" className="text-blue-600 hover:underline">Consumer Protection Laws</a></li>
          <li><a href="#topic4" className="text-blue-600 hover:underline">Access to Legal Aid</a></li>
          <li><a href="#topic5" className="text-blue-600 hover:underline">Your Rights During a Trial</a></li>
        </ul>
      </section>
    </div>
  );
};

export default AwarenessPage;
