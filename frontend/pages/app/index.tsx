import { PageLayout } from '@/lib/components/page';
import { ALL_FIELD_IDS, CREATE_AGREEMENT_FORM } from '@/lib/constants/agreement';
import { useWeb3 } from '@/lib/state/useWeb3';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Button, Card, CardBody, CardHeader, Heading, HStack, Spacer, Stack, Text } from '@chakra-ui/react';
import DOMPurify from 'dompurify';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { CREATE_AGREEMENT_STEPS } from './create/[create-step]';

export const draftMock = [
    {
        id: '1',
        name: 'Atlant x Hydra',
        status: 'draft',
        createdAt: '2021-10-10',
        updatedAt: '2021-10-10',
    },
    {
        id: '2',
        name: 'RaidGuild x Hydra',
        status: 'draft',
        createdAt: '2021-10-10',
        updatedAt: '2021-10-10',
    },
];

export default function App() {
    const web3 = useWeb3();
    const router = useRouter();

    // useEffect(() => {
    //     if (!isWeb3Connected(web3)) router.push('/login');
    // }, [web3]);

    return (
        <PageLayout>
            <Box h="20" />
            <Stack>
                <HStack>
                    <Heading>Contract Dashboard</Heading>
                    <Spacer />
                    <Link href={`/app/create/${CREATE_AGREEMENT_STEPS[0]}`}>
                        <Button>Create Agreement</Button>
                    </Link>
                </HStack>
                <Box h="12" />
                <Card>
                    <CardHeader>
                        <Heading size="md">Drafts</Heading>
                    </CardHeader>
                    <CardBody>
                        <Stack>
                            {draftMock.map(draft => (
                                <HStack key={draft.id}>
                                    <Text>{draft.name}</Text>
                                    <Spacer />
                                    <Button>View Agreement</Button>
                                </HStack>
                            ))}
                        </Stack>
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader>
                        <Heading size="md">Signed Agreements</Heading>
                    </CardHeader>
                    <CardBody>
                        <Stack>
                            {draftMock.map(draft => (
                                <HStack key={draft.id}>
                                    <Text>{draft.name}</Text>
                                    <Spacer />
                                    <Button rightIcon={<ExternalLinkIcon />}>Stream</Button>
                                    <Button rightIcon={<ExternalLinkIcon />}>Agreement</Button>
                                    <Button>Terminate 😈</Button>
                                </HStack>
                            ))}
                        </Stack>
                    </CardBody>
                </Card>
            </Stack>
        </PageLayout>
    );
}
