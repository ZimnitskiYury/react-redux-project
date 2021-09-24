import React from 'react';
import classNames from 'classnames';

import './loader.css';


function Loader() {
  return (
    <div className={classNames('wrapper')}>
      <span className={classNames(
        'circle',
        'circle-1',
      )}
      />
      <span className={classNames(
        'circle',
        'circle-2',
      )}
      />
      <span className={classNames(
        'circle',
        'circle-3',
      )}
      />
      <span className={classNames(
        'circle',
        'circle-4',
      )}
      />
      <span className={classNames(
        'circle',
        'circle-5',
      )}
      />
      <span className={classNames(
        'circle',
        'circle-6',
      )}
      />
      <span className={classNames(
        'circle',
        'circle-7',
      )}
      />
      <span className={classNames(
        'circle',
        'circle-8',
      )}
      />
    </div>
  );
}

export default Loader;
