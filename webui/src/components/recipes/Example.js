import { Branch, Flow, Parallel, Sequence, Step } from '../flow';

function Example() {
    return (
        <div style={{ maxWidth: '800px' }}>
            <Flow>
                <Sequence>
                    <Step>
                        <a href='https://example.com'>step 1</a>
                    </Step>

                    <Step>
                        step 2 with some longer content that can wrap on smaller screens.
                    </Step>

                    <Parallel>
                        <Branch>
                            <Step>step 3a1</Step>
                            <Step>step 3a2</Step>
                        </Branch>

                        <Branch>
                            <Step>step 3b1</Step>
                            <Step>step 3b2</Step>
                            <Step>
                                step 3b3 with a bit more text so you can test variable height
                                and wrapping behaviour.
                            </Step>
                        </Branch>
                    </Parallel>

                    <Step>step 4</Step>
                </Sequence>
            </Flow>
        </div>
    );
}

export default Example;