import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const websites = [
    { url: 'https://indianaqichecker.netlify.app/', name: 'aqi-checker' },
    { url: 'https://smallerimages.website/', name: 'image-compressor' },
    { url: 'https://www.ctccalculator.in/', name: 'ctc-calc' },
    { url: 'https://pixelrunner.netlify.app/', name: 'pixel-runner' },
    { url: 'https://meowie.netlify.app/', name: 'meowie' },
    { url: 'https://sarcle.netlify.app/', name: 'sarcle' },
    { url: 'https://aiweatherchecker.netlify.app/', name: 'ai-weather' },
    { url: 'https://allinonefinancecalculator.netlify.app/', name: 'finance-calc' },
    { url: 'https://bitcointimemachine.netlify.app/', name: 'btc-time' },
    { url: 'https://threejsnokiasnakegame.netlify.app/', name: 'snake-3d' },
    { url: 'https://indiancitiesaqi.netlify.app/', name: 'cities-aqi' },
    { url: 'https://indiansipcalculator.netlify.app/', name: 'sip-calc' },
    { url: 'https://valoranttrivia.netlify.app/', name: 'valorant-trivia' },
    { url: 'https://aijobboard.netlify.app/', name: 'ai-jobs' },
    { url: 'https://snakegamenokiaphone.netlify.app/', name: 'snake-classic' },
    { url: 'https://redditpostviewer.netlify.app/', name: 'reddit-viewer' },
    { url: 'https://bouncegame.netlify.app/', name: 'bounce-game' },
    { url: 'https://animemangarecommendation.netlify.app/', name: 'anime-manga' },
    { url: 'https://livecryptoprofitcalculator.netlify.app/', name: 'crypto-calc' },
    { url: 'https://mathematicaltoolkit.netlify.app/', name: 'math-toolkit' },
    { url: 'https://rubixcubesolver.netlify.app/', name: 'rubix-cube' },
    { url: 'https://youtubetospotifyplaylistconverter.netlify.app/', name: 'yt-spotify' },
    { url: 'https://3d2048game.netlify.app/', name: '2048-3d' },
    { url: 'https://contributeopensource.com/', name: 'contribute-opensource' },
    { url: 'https://deathnoteanime.netlify.app/', name: 'deathnote' },
    { url: 'https://todolistvaporwavestlye.netlify.app/', name: 'vaporwave-todo' },
    { url: 'https://webassemblyaddition.netlify.app/', name: 'wasm-addition' },
    { url: 'https://showcaseyourresume.netlify.app/', name: 'resume-showcase' }
];

async function takeScreenshots() {
    const browser = await puppeteer.launch({
        headless: "new",
        defaultViewport: {
            width: 1200,
            height: 630
        }
    });

    const outputDir = path.join(__dirname, '..', 'public', 'project-images');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    for (const site of websites) {
        try {
            console.log(`Taking screenshot of ${site.url}`);
            const page = await browser.newPage();
            await page.goto(site.url, { waitUntil: 'networkidle0', timeout: 30000 });
            await page.screenshot({
                path: path.join(outputDir, `${site.name}.png`),
                type: 'png'
            });
            await page.close();
            console.log(`Screenshot saved for ${site.name}`);
        } catch (error) {
            console.error(`Error taking screenshot for ${site.url}:`, error.message);
        }
    }

    await browser.close();
    console.log('All screenshots completed!');
}

takeScreenshots().catch(console.error);
