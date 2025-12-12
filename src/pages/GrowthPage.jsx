import { TrendingUp, Target, Lightbulb, Rocket, BarChart3, Users2 } from 'lucide-react';
import './GrowthPage.css';

function GrowthPage() {
  const metrics = [
    { label: 'Events Managed', value: '1,250+', icon: BarChart3 },
    { label: 'Client Satisfaction', value: '98%', icon: Target },
    { label: 'Industry Awards', value: '24', icon: Rocket },
    { label: 'Team Members', value: '150+', icon: Users2 }
  ];

  const strategies = [
    {
      title: 'Strategic Partnerships',
      description: 'Building alliances with premier venues, caterers, and entertainment providers to deliver exceptional experiences.',
      icon: Users2
    },
    {
      title: 'Innovation First',
      description: 'Leveraging cutting-edge technology and creative solutions to stay ahead in the event planning industry.',
      icon: Lightbulb
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Using analytics and insights to optimize event outcomes and continuously improve our services.',
      icon: BarChart3
    },
    {
      title: 'Scalable Excellence',
      description: 'Maintaining premium quality while expanding our reach to serve more distinguished clients globally.',
      icon: Rocket
    }
  ];

  return (
    <div className="growth-page">
      <section className="page-hero">
        <div className="hero-badge">GROWTH & DEVELOPMENT</div>
        <h1 className="page-title">Building Excellence</h1>
        <p className="page-subtitle">
          Our commitment to growth drives innovation, expands capabilities, and delivers unprecedented value to our clients
        </p>
      </section>

      <section className="metrics-section">
        <h2 className="section-title">
          <span className="section-label">[OUR IMPACT]</span>
          Growth Metrics
        </h2>
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <metric.icon size={40} className="metric-icon" />
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="strategies-section">
        <h2 className="section-title">
          <span className="section-label">[OUR APPROACH]</span>
          Growth Strategies
        </h2>
        <div className="strategies-grid">
          {strategies.map((strategy, index) => (
            <div key={index} className="strategy-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="strategy-icon-wrapper">
                <strategy.icon size={32} />
              </div>
              <h3 className="strategy-title">{strategy.title}</h3>
              <p className="strategy-description">{strategy.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="vision-section">
        <div className="vision-content">
          <h2 className="section-title">
            <span className="section-label">[VISION 2030]</span>
            The Future of Events
          </h2>
          <p className="vision-text">
            We envision a future where every event transcends traditional boundaries, creating immersive experiences 
            that blend technology, artistry, and human connection. Our growth strategy focuses on sustainable expansion, 
            continuous innovation, and maintaining the highest standards of excellence that define the BASILEUS brand.
          </p>
          <div className="vision-stats">
            <div className="vision-stat">
              <TrendingUp size={24} />
              <span>300% projected growth by 2030</span>
            </div>
            <div className="vision-stat">
              <Target size={24} />
              <span>Global presence in 50+ cities</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GrowthPage;
