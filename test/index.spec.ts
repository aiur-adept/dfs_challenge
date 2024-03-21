import { describe, it } from 'mocha';
const chai = await import('chai');
import { X } from '../src/index.ts';

describe('Test description', function () {
    it('should ...', async function () {
        
        const x = new X();

        const list = x.foo();

        const expected = [0, 1, 2, 3];

        chai.expect(list).to.deep.equal(expected);
    });
});