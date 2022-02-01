import React, { useEffect, useRef, useState } from 'react';

// CommandBar
import { init } from 'commandbar';

const useCommandBar = () => {

    const componentWillUnmount = () => {
        console.log('CommandBar Hooks Unmount')
    };

    const componentDidMount = () => {
        init('91aaa579');
        window.CommandBar.boot('34aa5745-51c7');
    }

    const sortTasksAction = () => {
        console.log('Sort Task Action');
    }

    // Life Cycle
	useEffect(() => {
        componentDidMount();
        return componentWillUnmount;
    }, []);


    useEffect(() => {

        // TODO: Add useRouter
        // window.CommandBar.addRouter(routerFunc);

        // Add Callback
        window.CommandBar.addCallback('sortByLocations', sortTasksAction);


        // Add Context
        window.CommandBar.addContext("customersEmail",
            [
                { label: "naupa@yahoo.com", id: 1 },
                { label: "munge@optonline.net", id: 2 },
                { label: "adamk@icloud.com", id: 3 },
                { label: "yumpy@verizon.net", id: 4 },
                { label: "raines@verizon.net", id: 5 },
                { label: "flaviog@yahoo.ca", id: 6 },
                { label: "chlim@icloud.com", id: 7 },
                { label: "oechslin@yahoo.com", id: 8 },
                { label: "gamma@optonline.net", id: 9 },
            ],
            {
                "renderOptions": {
                "labelKey": "label"
                },
                "quickFindOptions": {
                "quickFind": true,
                }
            }
        );


    }, []);

}


export default useCommandBar;