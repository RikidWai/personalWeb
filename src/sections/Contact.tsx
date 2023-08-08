import React from 'react';

import { FaLinkedinIn, FaGithub, FaMailBulk, FaPhoneAlt } from 'react-icons/fa';
import { IoNewspaperOutline } from 'react-icons/io5';

import CenterGrid, { GridItem } from '../components/center-grid';
import Section from '../components/section';
import SocialLink from '../components/social-link';
import Paragraph from '../components/text/paragraph';

export default function Contact(): React.ReactElement {
    return (
        <Section id='Contact' heading='Contact'>
            <center>
                <Paragraph>{`I'd love to hear from you! You can find my resumé and socials below`}</Paragraph>
            </center>
            <br />
            <CenterGrid columnSpacing={0}>
                <GridItem xs={4} sm={2} lg={1}>
                    <SocialLink name='GitHub' url='https://github.com/RikidWai' icon={FaGithub} />
                </GridItem>
                <GridItem xs={4} sm={2} lg={1}>
                    <SocialLink
                        name='LinkedIn'
                        url='https://www.linkedin.com/in/ricky-chu-90843218b/'
                        icon={FaLinkedinIn}
                    />
                </GridItem>
                <GridItem xs={4} sm={2} lg={1}>
                    <SocialLink name='E-mail' url='mailto:rickywai77@gmail.com' icon={FaMailBulk} />
                </GridItem>
                <GridItem xs={4} sm={2} lg={1}>
                    <SocialLink
                        name='Resumé'
                        icon={IoNewspaperOutline}
                        url='./doc/ChuWaiKitResumeCA.pdf'
                    />
                </GridItem>
            </CenterGrid>
        </Section>
    );
}
