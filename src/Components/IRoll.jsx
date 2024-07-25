import React from 'react'

import {
    ModalHeader,
    ModalDescription,
    ModalContent,
    ModalActions,
    Button,
    Icon,
    Image,
    Modal,
} from 'semantic-ui-react'

function IRoll() {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<Button>See More <Icon size='small' name='angle right' /></Button>}
        >
            <ModalHeader>iRoll Project</ModalHeader>
            <ModalContent image>
                <Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped />
                <ModalDescription>
                    <p>
                        This is an example of expanded content that will cause the modal's
                        dimmer to scroll.
                    </p>
                </ModalDescription>
            </ModalContent>
            <ModalActions>
                <Button primary onClick={() => setOpen(false)}>
                    Proceed <Icon size='small' name='angle right' />
                </Button>
            </ModalActions>
        </Modal>
    )
}

export default IRoll