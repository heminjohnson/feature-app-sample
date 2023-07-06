import {Card, Text} from '@blueprintjs/core';
import {FeatureAppDefinition} from '@feature-hub/core';
import {ReactFeatureApp} from '@feature-hub/react';
import * as React from 'react';

const featureAppDefinition: FeatureAppDefinition<ReactFeatureApp> = {
  create() {
    return {
      render() {
        return (
          <Card style={{margin: '20px'}}>
            <Text>Hello from Feature App 2!</Text>
          </Card>
        );
      },
    };
  },
};

export default featureAppDefinition;
