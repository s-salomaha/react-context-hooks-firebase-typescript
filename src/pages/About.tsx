import React from 'react';

export const About: React.FC = () => (
  <div className="jumbotron my-5">
    <div className="container">
      <h1 className="display-4 mb-4">Учебное React приложение "Мои заметки"</h1>
      <p className="lead">
        Версия приложения <strong>1.0.0</strong>
      </p>
      <p>
        В приложении используются хуки, контектс, редюсеры, react-transition-group, firebase и TypeScript.
      </p>
    </div>
  </div>
);
