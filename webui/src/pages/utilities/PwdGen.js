import { useState } from 'react';
import Layout from '../../components/Layout';
import SectionBackground from '../../components/SectionBackground';
import bgPwdGen from '../../res/010101.jpg';

function PwdGen() {
    const [length, setLength] = useState(32);
    const [useLower, setUseLower] = useState(true);
    const [useUpper, setUseUpper] = useState(true);
    const [useDigits, setUseDigits] = useState(true);
    const [useSymbols, setUseSymbols] = useState(true);
    const [password, setPassword] = useState('');
    const [copyLabel, setCopyLabel] = useState('Copy');

    function getRandomChar(chars) {
        const i = Math.floor(Math.random() * chars.length);
        return chars.charAt(i);
    }

    function shuffle(str) {
        return str
            .split('')
            .map(c => ({ c, r: Math.random() }))
            .sort((a, b) => a.r - b.r)
            .map(o => o.c)
            .join('');
    }

    function generatePassword(len, lower, upper, digits, symbols) {
        const sets = {
            lower: 'abcdefghijklmnopqrstuvwxyz',
            upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            digits: '0123456789',
            symbols: '!@#$%&*?.,<>;/'
        };

        let all = '';
        let mustInclude = [];

        if (lower) {
            all += sets.lower;
            mustInclude.push(getRandomChar(sets.lower));
        }
        if (upper) {
            all += sets.upper;
            mustInclude.push(getRandomChar(sets.upper));
        }
        if (digits) {
            all += sets.digits;
            mustInclude.push(getRandomChar(sets.digits));
        }
        if (symbols) {
            all += sets.symbols;
            mustInclude.push(getRandomChar(sets.symbols));
        }

        if (!all) return '';

        let result = mustInclude.join('');
        while (result.length < len) {
            result += getRandomChar(all);
        }

        return shuffle(result);
    }

    function handleGenerate(e) {
        e.preventDefault();
        const pwd = generatePassword(length, useLower, useUpper, useDigits, useSymbols);
        setPassword(pwd);
    }

    function handleCopy() {
        if (password) {
            navigator.clipboard.writeText(password).then(() => {
                setCopyLabel('Copied!');
                setTimeout(() => setCopyLabel('Copy'), 2000);
            });
        }
    }

    return (
        <Layout>
            <div className="text-center">
                <SectionBackground img={bgPwdGen}>
                    <h2 className="my-4">Password generator</h2>
                    <form onSubmit={handleGenerate}>
                        <div className="row justify-content-center">
                            <div className='col' />
                            <div className="col-lg">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Password length</span>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={length}
                                        min="1"
                                        max="255"
                                        onChange={e => setLength(parseInt(e.target.value))}
                                    />
                                </div>

                                {[
                                    ['Lowercase', useLower, setUseLower, 'charactersL'],
                                    ['Uppercase', useUpper, setUseUpper, 'charactersU'],
                                    ['Digits', useDigits, setUseDigits, 'charactersD'],
                                    ['Symbols', useSymbols, setUseSymbols, 'charactersS']
                                ].map(([label, val, setter, id], idx, arr) => (
                                    <div className={`input-group ${idx < arr.length - 1 ? 'mb-1' : 'mb-3'}`} key={id}>
                                        <div className="input-group-text">
                                            <div className="form-check form-switch">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id={id}
                                                    checked={val}
                                                    onChange={() => setter(!val)}
                                                />
                                            </div>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={label}
                                            disabled
                                        />
                                    </div>
                                ))}

                                <button type="submit" className="btn btn-primary mb-3" id="submit"
                                    disabled={!length || (!useLower && !useUpper && !useDigits && !useSymbols)}
                                >
                                    Generate password
                                </button>
                            </div>
                            <div className='col' />
                        </div>

                        <div className="input-group mb-3 justify-content-center">
                            <input
                                type="text"
                                className="form-control center monospace"
                                id="result"
                                readOnly
                                value={password}
                            />
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={handleCopy}
                                style={{ minWidth: '85px' }}
                                disabled={!password}
                            >
                                {copyLabel}
                            </button>
                        </div>
                    </form>
                </SectionBackground>
            </div>
        </Layout>
    );
}

export default PwdGen;
