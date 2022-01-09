import React from 'react';
import SimpleBarReact from 'simplebar-react';

import Accordion from './ui/Accordion';
import AccordionSection from './ui/AccordionSection';

const LegalStuff = () => {

    return(
        <>
            <h1>Legal Stuff</h1>
            <p>I'm not even sure this page is necessary to include, as this game system is a wholly maverick creation. Of course I've borrowed game design ideas from <em>numerous</em> esoteric places, but heck, I'm not even using a d20 as the primary die anymore!</p>
            <p>Still, it can't hurt to include the classic OGL d20 document, just in case. It covers common terms like "Saving Throw," I suppose.</p>
            <Accordion lsUniqueKey={`zWolf_legal_ogl`}>
                <AccordionSection>
                    <h2>OPEN GAME LICENSE Version 1.0a</h2>
                    <section className="ogl">
                        <p><a href="http://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noreferrer">Creative Commons License</a></p>
                        <p>This work is licensed under a <a href="http://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noreferrer">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.</p>
                        <p>The following text is the property of Wizards of the Coast, Inc. and is Copyright 2000 Wizards of the Coast, Inc (“Wizards”). All Rights Reserved.</p>
                        <ol>
                            <li><strong>Definitions:</strong>
                                <ul>
                                    <li><strong>(a) “Contributors”</strong> means the copyright and/or trademark owners who have contributed Open Game Content;</li>
                                    <li><strong>(b) “Derivative Material”</strong> means copyrighted material including derivative works and translations (including into other computer languages), potation, modification, correction, addition, extension, upgrade, improvement, compilation, abridgment or other form in which an existing work may be recast, transformed or adapted;</li>
                                    <li><strong>(c) “Distribute”</strong> means to reproduce, license, rent, lease, sell, broadcast, publicly display, transmit or otherwise distribute;</li>
                                    <li><strong>(d) “Open Game Content”</strong> means the game mechanic and includes the methods, procedures, processes and routines to the extent such content does not embody the Product Identity and is an enhancement over the prior art and any additional content clearly identified as Open Game Content by the Contributor, and means any work covered by this License, including translations and derivative works under copyright law, but specifically excludes Product Identity.</li>
                                    <li><strong>(e) “Product Identity”</strong> means product and product line names, logos and identifying marks including trade dress; artifacts; creatures characters; stories, storylines, plots, thematic elements, dialogue, incidents, language, artwork, symbols, designs, depictions, likenesses, formats, poses, concepts, themes and graphic, photographic and other visual or audio representations; names and descriptions of characters, spells, enchantments, personalities, teams, personas, likenesses and special abilities; places, locations, environments, creatures, equipment, magical or supernatural abilities or effects, logos, symbols, or graphic designs; and any other trademark or registered trademark clearly identified as Product identity by the owner of the Product Identity, and which specifically excludes the Open Game Content;</li>
                                    <li><strong>(f) “Trademark”</strong> means the logos, names, mark, sign, motto, designs that are used by a Contributor to identify itself or its products or the associated products contributed to the Open Game License by the Contributor (g) “Use”, “Used” or “Using” means to use, Distribute, copy, edit, format, modify, translate and otherwise create Derivative Material of Open Game Content. (h) “You” or “Your” means the licensee in terms of this agreement.</li>
                                </ul>
                            </li>
                            <li><strong>The License:</strong> This License applies to any Open Game Content that contains a notice indicating that the Open Game Content may only be used under and in terms of this License. You must affix such a notice to any Open Game Content that you Use. No terms may be added to or subtracted from this License except as described by the License itself. No other terms or conditions may be applied to any Open Game Content distributed using this License.</li>
                            <li><strong>Offer and Acceptance:</strong> By Using the Open Game Content You indicate Your acceptance of the terms of this License.</li>
                            <li><strong>Grant and Consideration:</strong> In consideration for agreeing to use this License, the Contributors grant You a perpetual, worldwide, royalty-free, non-exclusive license with the exact terms of this License to Use, the Open Game Content.</li>
                            <li><strong>Representation of Authority to Contribute:</strong> If You are contributing original material as Open Game Content, You represent that Your Contributions are Your original creation and/or You have sufficient rights to grant the rights conveyed by this License.</li>
                            <li><strong>Notice of License Copyright:</strong> You must update the COPYRIGHT NOTICE portion of this License to include the exact text of the COPYRIGHT NOTICE of any Open Game Content You are copying, modifying or distributing, and You must add the title, the copyright date, and the copyright holder’s name to the COPYRIGHT NOTICE of any original Open Game Content you Distribute.</li>
                            <li><strong>Use of Product Identity:</strong> You agree not to Use any Product Identity, including as an indication as to compatibility, except as expressly licensed in another, independent Agreement with the owner of each element of that Product Identity. You agree not to indicate compatibility or co-adaptability with any Trademark or Registered Trademark in conjunction with a work containing Open Game Content except as expressly licensed in another, independent Agreement with the owner of such Trademark or Registered Trademark. The use of any Product Identity in Open Game Content does not constitute a challenge to the ownership of that Product Identity. The owner of any Product Identity used in Open Game Content shall retain all rights, title and interest in and to that Product Identity.</li>
                            <li><strong>Identification:</strong> If you distribute Open Game Content You must clearly indicate which portions of the work that you are distributing are Open Game Content.</li>
                            <li><strong>Updating the License:</strong> Wizards or its designated Agents may publish updated versions of this License. You may use any authorized version of this License to copy, modify and distribute any Open Game Content originally distributed under any version of this License.</li>
                            <li><strong>Copy of this License:</strong> You MUST include a copy of this License with every copy of the Open Game Content You Distribute.</li>
                            <li><strong>Use of Contributor Credits:</strong> You may not market or advertise the Open Game Content using the name of any Contributor unless You have written permission from the Contributor to do so.</li>
                            <li><strong>Inability to Comply:</strong> If it is impossible for You to comply with any of the terms of this License with respect to some or all of the Open Game Content due to statute, judicial order, or governmental regulation then You may not Use any Open Game Material so affected.</li>
                            <li><strong>Termination:</strong> This License will terminate automatically if You fail to comply with all terms herein and fail to cure such breach within 30 days of becoming aware of the breach. All sublicenses shall survive the termination of this License.</li>
                            <li><strong>Reformation:</strong> If any provision of this License is held to be unenforceable, such provision shall be reformed only to the extent necessary to make it enforceable.</li>
                            <li><strong>COPYRIGHT NOTICE:</strong> Open Game License v 1.0a Copyright 2000, Wizards of the Coast, Inc.</li>
                        </ol>
                        <p>System Reference Document. Copyright 2000, Wizards of the Coast, Inc.; Authors Jonathan Tweet, Monte Cook, Skip Williams, based on material by E. Gary Gygax and Dave Arneson.</p>
                        <p>Open Game License v 1.0 Copyright 2000, Wizards of the Coast, Inc. System Reference Document, Copyright 2000, Wizards of the Coast, Inc., Authors Jonathan Tweet, Monte Cook, Skip Williams, based on original material by E. Gary Gygax and Dave Arneson.</p>
                        <p>Modern System Reference Document, Copyright 2002-2004, Wizards of the Coast, Inc.; Authors Bill Slavicsek, Jeff Grubb, Rich Redman, Charles Ryan, Eric Cagle, David Noonan, Stan!, Christopher Perkins, Rodney Thompson, and JD Wiker, based on material by Jonathan Tweet, Monte Cook, Skip Williams, Richard Baker, Peter Adkison, Bruce R. Cordell, John Tynes, Andy Collins, and JD Wiker.</p>
                    </section>
                </AccordionSection>
            </Accordion>
        </>
    );
}

export default LegalStuff;