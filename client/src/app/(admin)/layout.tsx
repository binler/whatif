"use client"
import { View, Grid } from '@adobe/react-spectrum';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import LeftSideBar from '@/components/layout/leftsidebar';
import RightSideBar from '@/components/layout/rightsidebar';

export default function AdminLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <Grid
            areas={{
                base: [
                    'header',
                    'nav',
                    'content',
                    'footer'
                ],
                M: [
                    'header   header',
                    'nav      content',
                    'nav      content',
                    'footer   footer'
                ],
                L: [
                    'header header  header',
                    'nav    content toc',
                    'nav    content toc',
                    'footer footer  footer'
                ]
            }}
            columns={{
                M: ['size-2000', '1fr'],
                L: ['size-2000', '1fr', 'size-2000']
            }}
            gap="size-100"
        >
            <Header />
            <LeftSideBar />
            <View
                backgroundColor="purple-600"
                gridArea="content"
                height="size-4600"
            >
                {children}
            </View>
            <RightSideBar />
            <Footer />
        </Grid>
    )
}
