# Project Structure Guide

## Component Organization
- Each component should have its own directory
- Component names should be PascalCase
- Keep components focused on a single responsibility
- Follow the established folder structure

```
ComponentName/
├── index.jsx           # Main component file
├── ComponentName.jsx   # Component implementation
├── ComponentName.css   # Component-specific styles
└── ComponentName.test.jsx  # Tests
```


## File Naming Conventions
- React components: `ComponentName.jsx`
- Test files: `ComponentName.test.jsx`
- CSS modules: `ComponentName.css`
- Utility functions: `camelCase.js`


## Import Order
1. React and third-party libraries
2. Components
3. Hooks and contexts
4. Utils and services
5. Styles and assets

Example:
```jsx
import React from 'react';
import PropTypes from 'prop-types';

import Button from '@/components/common/Button';

import { useAuth } from '@/hooks/useAuth';

import { formatPrice } from '@/utils/formatters';

import './ComponentName.css';
```