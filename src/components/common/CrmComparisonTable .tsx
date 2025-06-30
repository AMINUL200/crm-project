import { faCheckCircle, faTimesCircle, faInfoCircle, faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface ProductFeature {
  available: boolean;
  notes?: string; // Optional notes about the feature
}

interface Product {
  name: string;
  price: string;
  features: Record<string, ProductFeature>; // Maps feature names to availability
}

const CrmComparisonTable: React.FC = () => {
  const products: Product[] = [
    {
      name: 'Basic',
      price: '₹5,999/mo',
      features: {
        'Lead Management': { available: true },
        'Deal Management': { available: true },
        'Contact Management': { available: true },
        'Email Integration': { available: true },
        'Basic Reporting': { available: true },
        'Mobile Access': { available: true },
        'API Access': { available: false },
        'Workflow Automation': { available: false },
        'Custom Fields': { available: false },
        'Advanced Analytics': { available: false }
      }
    },
    {
      name: 'B1',
      price: '₹9,999/mo',
      features: {
        'Lead Management': { available: true },
        'Deal Management': { available: true },
        'Contact Management': { available: true },
        'Email Integration': { available: true },
        'Basic Reporting': { available: true },
        'Mobile Access': { available: true },
        'API Access': { available: true },
        'Workflow Automation': { available: true },
        'Custom Fields': { available: true },
        'Advanced Analytics': { available: false }
      }
    },
    {
      name: 'B2',
      price: '₹12,999/mo',
      features: {
        'Lead Management': { available: true },
        'Deal Management': { available: true },
        'Contact Management': { available: true },
        'Email Integration': { available: true },
        'Basic Reporting': { available: true },
        'Mobile Access': { available: true },
        'API Access': { available: true },
        'Workflow Automation': { available: true },
        'Custom Fields': { available: true },
        'Advanced Analytics': { available: true }
      }
    },
    {
      name: 'Standard',
      price: '₹18,999/mo',
      features: {
        'Lead Management': { available: true },
        'Deal Management': { available: true },
        'Contact Management': { available: true },
        'Email Integration': { available: true },
        'Basic Reporting': { available: true },
        'Mobile Access': { available: true },
        'API Access': { available: true },
        'Workflow Automation': { available: true, notes: 'Advanced workflows' },
        'Custom Fields': { available: true },
        'Advanced Analytics': { available: true, notes: 'Custom dashboards' }
      }
    },
    {
      name: 'Advanced',
      price: '₹24,999/mo',
      features: {
        'Lead Management': { available: true },
        'Deal Management': { available: true },
        'Contact Management': { available: true },
        'Email Integration': { available: true, notes: 'Unlimited emails' },
        'Basic Reporting': { available: true },
        'Mobile Access': { available: true },
        'API Access': { available: true, notes: 'High rate limits' },
        'Workflow Automation': { available: true, notes: 'Complex workflows' },
        'Custom Fields': { available: true, notes: 'Unlimited fields' },
        'Advanced Analytics': { available: true, notes: 'AI-powered insights' }
      }
    },
  ];

  const features: string[] = [
    'Lead Management',
    'Deal Management',
    'Contact Management',
    'Email Integration',
    'Basic Reporting',
    'Mobile Access',
    'API Access',
    'Workflow Automation',
    'Custom Fields',
    'Advanced Analytics',
  ];

  return (
    <div className='bg-gradient-to-b from-blue-900 to-blue-950 py-16 px-4'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-blue-300">CRM Plans</span> Comparison
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Compare our different CRM plans and choose the one that fits your business needs.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl shadow-2xl">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="py-6 px-6 text-left text-lg font-semibold text-white bg-blue-800/30 rounded-tl-2xl border-r border-blue-700/50">
                      Features
                    </th>
                    {products.map((product, index) => (
                      <th
                        key={product.name}
                        className={`py-6 px-6 text-center font-semibold text-white whitespace-nowrap relative
                          ${index === 2 ? 'bg-gradient-to-b from-yellow-400 to-yellow-500 text-blue-900' : 'bg-blue-800/30'}
                          ${index === products.length - 1 ? 'rounded-tr-2xl' : ''}
                          border-r border-blue-700/50`}
                      >
                        {index === 3 && (
                          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                            <FontAwesomeIcon icon={faCrown} className="mr-1" />
                            Recommended
                          </div>
                        )}
                        <div className={`text-xl font-bold mb-1 ${index === 2 ? 'text-blue-900' : 'text-white'}`}>
                          {product.name}
                        </div>
                        <div className={`text-sm font-medium rounded-full py-1 px-3 inline-block ${
                          index === 2 ? 'bg-blue-900/20 text-blue-900' : 'bg-white/10 text-white'
                        }`}>
                          {product.price}
                        </div>
                        {index === 2 && (
                          <div className="mt-2 text-xs font-medium bg-blue-900 text-yellow-400 rounded-full py-1 px-2 inline-block">
                            Most Popular
                          </div>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-700/30">
                  {features.map((feature, rowIndex) => (
                    <tr
                      key={feature}
                      className={`${rowIndex % 2 === 0 ? 'bg-blue-900/20' : 'bg-blue-900/10'} hover:bg-blue-800/30 transition-colors`}
                    >
                      <td className="py-5 px-6 text-white/90 font-medium border-r border-blue-700/50">
                        <div className="flex items-center">
                          {feature}
                        </div>
                      </td>
                      {products.map((product, colIndex) => {
                        const featureInfo = product.features[feature];
                        return (
                          <td
                            key={`${feature}-${product.name}`}
                            className={`py-5 px-6 text-center relative group border-r border-blue-700/50
                              ${colIndex === 2 ? 'bg-yellow-400/10' : ''}`}
                          >
                            <div className="flex justify-center items-center">
                              {featureInfo.available ? (
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center transition-transform hover:scale-110">
                                  <FontAwesomeIcon 
                                    icon={faCheckCircle} 
                                    className="text-green-400 text-lg" 
                                  />
                                </div>
                              ) : (
                                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center opacity-70">
                                  <FontAwesomeIcon 
                                    icon={faTimesCircle} 
                                    className="text-red-400 text-lg" 
                                  />
                                </div>
                              )}
                              {featureInfo.notes && (
                                <div className="ml-2 text-blue-300 cursor-pointer">
                                  <FontAwesomeIcon 
                                    icon={faInfoCircle} 
                                    className="opacity-70 hover:opacity-100 transition-opacity" 
                                  />
                                  <div className="absolute z-10 hidden group-hover:block bg-gray-800 text-white text-sm rounded-lg p-3 bottom-full mb-2 left-1/2 transform -translate-x-1/2 shadow-xl min-w-[200px] max-w-[250px]">
                                    <div className="font-medium mb-1 text-blue-300">Note:</div>
                                    {featureInfo.notes}
                                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rotate-45"></div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="py-6 px-6 rounded-bl-2xl bg-blue-800/30 border-r border-blue-700/50"></td>
                    {products.map((product, index) => (
                      <td 
                        key={`footer-${product.name}`} 
                        className={`py-4 px-6 text-center ${index === products.length - 1 ? 'rounded-br-2xl' : ''} 
                          ${index === 2 ? 'bg-yellow-400/10' : 'bg-blue-800/30'} border-r border-blue-700/50`}
                      >
                        <button className={`px-6 py-3 rounded-lg font-medium text-sm transition-all 
                          ${index === 2 ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 hover:shadow-lg hover:shadow-yellow-400/30' : 
                            index === 3 ? 'bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-400/30' :
                            'bg-white/10 text-white hover:bg-white/20'} 
                          flex items-center justify-center mx-auto min-w-[120px]`}>
                            Sign Up
                          {/* {index === 2 ? 'Get Started' : index === 3 ? 'Try Free' : 'Learn More'}
                          {index === 3 && (
                            <span className="ml-2 text-xs bg-white/20 rounded-full px-2 py-0.5">7-day trial</span>
                          )} */}
                        </button>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-blue-800/30 rounded-full px-4 py-2 border border-blue-700/50">
            <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
            <span className="text-blue-100 text-sm">All plans include 24/7 customer support</span>
          </div>
        </div>

        <div className="mt-8 text-center text-blue-200 text-sm">
          <p>All prices are monthly subscriptions. Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default CrmComparisonTable;