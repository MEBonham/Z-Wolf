import React, { useState, useEffect } from 'react';
import SimpleBarReact from 'simplebar-react';

import fb from '../fbConfig';
import 'simplebar/dist/simplebar.min.css';
import { FOOTER_HEIGHT_PX } from '../helpers/SiteConstants';
import { MainEnvelope, PrimaryBar, Sidebar } from '../styling/StyleBank';
import UsersLoader from './hidden/UsersLoader';
import MainHeader from './headerfooter/MainHeader';
import MainFooter from './headerfooter/MainFooter';
import SideContents from './sidebar/SideContents';
import MainRouting from './MainRouting';
import useUser from '../hooks/UserStore';

const App = () => {
    const [headerFooterHeight, setHeaderFooterHeight] = useState(80);

    useEffect(() => {
        setHeaderFooterHeight(document.querySelector(".App > header").offsetHeight + FOOTER_HEIGHT_PX);

        const db = fb.db;
        fb.auth.getRedirectResult()
            .then((res) => {
                if (res.user) {
                    try {
                        const defaults = {
                            defaultData: {
                                displayName: res.user.displayName,
                                emailVerified: res.user.emailVerified,
                                isAnonymous: res.user.isAnonymous,
                                phoneNumber: res.user.phoneNumber,
                                photoURL: res.user.photoURL,
                                refreshToken: res.user.refreshToken
                            },
                            email: res.user.email,
                            rank: "peasant",
                            passcodes: ["examples"],
                            participations: [],
                            disabledCampaigns: [],
                            lastRollView: Date.now()
                        };
                        db.collection("profiles").doc(res.user.uid).get()
                            .then((doc) => {
                                if (doc.exists) {
                                    db.collection("profiles").doc(res.user.uid).set({
                                        ...defaults,
                                        ...doc.data()
                                    });
                                } else {
                                    db.collection("profiles").doc(res.user.uid).set(defaults);
                                }
                            }).catch((err) => {
                                console.log("Error:", err);
                                db.collection("errors").doc(Date.now()).set({
                                    origin: "Register new user getRedirectResult 0",
                                    ...err
                                });
                            })
                    } catch(err) {
                        console.log("Error:", err);
                        db.collection("errors").doc(Date.now()).set({
                            origin: "Register new user getRedirectResult 1",
                            ...err
                        });
                    }
                }
            }).catch((error) => {
                console.log(err);
                db.collection("errors").doc(Date.now()).set({
                    origin: "Register new user getRedirectResult 2",
                    ...err
                });
            });
    }, []);

    return(
        <div className="App">
            <UsersLoader />
            {/* <div className="bugHunter">
                <p>{JSON.stringify(profile)}</p>
            </div> */}
            <MainHeader />
            <MainEnvelope headerFooterHeight={headerFooterHeight}>
                <PrimaryBar>
                    <SimpleBarReact style={{ height: '100%', paddingRight: '30px' }}>
                        <MainRouting />
                    </SimpleBarReact>
                </PrimaryBar>
                <Sidebar>
                    <SideContents />
                </Sidebar>
            </MainEnvelope>
            <MainFooter />
        </div>
    );
}
export default App;