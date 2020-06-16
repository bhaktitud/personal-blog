---
path: skeleton-loading-with-styled-components
date: 2020-06-16T02:39:48.079Z
title: Skeleton Loading With Styled Components
description: Tutorial on how to create a skeleton loading for your web app
image: assets/skeleton.gif
tags:
  - front-end
  - tutorial
  - javascript
---
Hi, You maybe wondering on how to create a loading animation like youtube, instagram or any other famous website has. So, in this tutorial I will show you how to create a skeleton loading by using styled components in react js. 

First, let start a project by running the `create-react-app <project_name>` in your terminal. 

```shell
$ create-react-app skeletonapp
```

I assume that you already know how to start react project, or you can start in your existing project, if you do then skip this step.

Next thing to do is install the `styled-components`, 

```shell
$ yarn add styled-components
```

For the sake of simplicity, let us use bootstrap css-framework so that we can use the classname style in our object. You can refer to [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/) website for the installation procedures, or else you can also use any other css-framework.

Now, create a new file (name it as you want, `Skeleton.js` would do) in one of the folder in your project, I would suggest you to make it in `src/components` . In your `Skeleton.js` file, follow the code snippet below:

```javascript
import React from 'react';
import styled from 'styled-components';

export default function Skeleton() {
    return (
        <div className='d-flex flex-row flex-wrap align-items-center justify-content-center'>
                <div 
                  key ={index}
                  className='d-flex bg-white flex-column mx-3 my-3 shadow rounded align-items-center justify-content-around' 
                  style={{ width: '20rem', height: '20rem' }}
                >
                        <div className='flex-wrap w-100 h-100 bg-light d-flex flex-column justify-content-center align-items-center'>
                            <div className='w-75 h-50'>
                                <SSkeletonLine />
                            </div>
                        </div>
                        <Description className='border-top d-flex flex-row mx-2 pt-2 pb-2 justify-content-between align-items-between w-100 h-50'>
                            <div className='w-100 h-100 d-flex flex-column mx-2 align-items-start justify-content-center '>
                                <div className='w-100 h-50'>
                                    <SkeletonLine />
                                </div>
                            </div>
                            <div className='w-75 h-100 pr-2 d-flex flex-column align-items-center mr-1 justify-content-center'>
                                <div className='w-75 h-75'>
                                    <SSkeletonLine />
                                </div>
                            </div>
                        </Description>
                </div>
        </div>
    )
}


const Description = styled.div`
    background: linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%);
`

const SkeletonPulse = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #F0F0F0 5%, #F8F8F8 20%, #F0F0F0 80%);
  background-size: 85% 85%;
  animation: pulse 0.5s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    80% {
      background-position: -135% 0%;
    }
  }
`;

const SkeletonLine = styled(SkeletonPulse)`
  width: 5.5em;
  border-radius: 5px;
  &::before {
    content: "\00a0";
  }
`;
```

That's all you need to do, and now you can import the skeleton to your desired file where you want to use it. Simply add a conditional when you want to show the skeleton, usually make use of the idle time when fetching the product list. 

Here is my result:

![skeleton pulse loading](assets/skeleton.gif "Modern Skeleton Loading")

If you have any further question or confused to follow this tutorial, please do not hesitate you can contact me through support@bhaktidev.com or you can also reach me out from the contact page. Happy coding!