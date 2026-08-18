"use client"
import React, { useState } from 'react';
import styles from './CreateRoomCard.module.css';
import { 
  ArrowLeft, 
  Sparkles, 
  Upload, 
  Shuffle, 
  ChevronDown, 
  Users, 
  Zap, 
  Shield, 
  Eye, 
  X
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

interface ThemeCard {
  id: string;
  name: string;
  words: string;
  icon: string | React.ReactNode;
}

const THEMES: ThemeCard[] = [
  { id: 'random', name: 'Random', words: '', icon: <Shuffle className="w-5 h-5 text-white" /> },
  { id: 'animals', name: 'Animals', words: '30 words', icon: '🦁' },
  { id: 'colors', name: 'Colors', words: '30 words', icon: '🎨' },
  { id: 'countries', name: 'Countries', words: '30 words', icon: '🌍' },
  { id: 'daily', name: 'Daily Items', words: '30 words', icon: '🎒' },
  { id: 'food', name: 'Food & Drinks', words: '30 words', icon: '🍔' },
];

const RULES = [
  {
    num: 1,
    title: 'Join the room',
    desc: 'Players join using the room code provided by the host.',
  },
  {
    num: 2,
    title: 'Get your word',
    desc: 'Most players receive the same secret word.\nThe imposter receives a different word or clue.',
  },
  {
    num: 3,
    title: 'Give clues',
    desc: 'Each player gives a clue without directly saying\nthe secret word.',
  },
  {
    num: 4,
    title: 'Find the imposter',
    desc: 'Players discuss the clues and vote for the person\nthey think is the imposter.',
  },
  {
    num: 5,
    title: 'Win the game',
    desc: 'The players win by identifying the imposter.\nThe imposter wins by avoiding detection.',
  },
];

export const CreateRoomCard: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>('random');
  const [roomName, setRoomName] = useState<string>("Host's Room");
  const [maxPlayers, setMaxPlayers] = useState<number>(8);
  const [showRulesModal, setShowRulesModal] = useState<boolean>(true);
  const [requireAccount, setRequireAccount] = useState<boolean>(true);
  const [allowSpectators, setAllowSpectators] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-[#07090e] flex items-center justify-center p-4 md:p-8">
      <div className={styles.mainWrapper}>
        {/* Header */}
        <header className="flex items-start gap-4 mb-8">
          <button className="mt-1 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-[#f83353] tracking-wide">Create Room</h1>
            <p className="text-xs text-[#8f96a3] mt-0.5">Set up your game room and invite friends</p>
          </div>
        </header>

        {/* Word Theme Header Row */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#f83353]" />
            <span className="text-white font-semibold text-sm">Word Theme</span>
          </div>
          <div className="flex items-center gap-2">
            <button className={styles.aiButton}>
              <Sparkles className="w-3.5 h-3.5" />
              AI Generate
            </button>
            <button className={styles.importButton}>
              <Upload className="w-3.5 h-3.5" />
              Import
            </button>
          </div>
        </div>

        {/* Theme Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-2">
          {THEMES.map((theme) => {
            const isSelected = selectedTheme === theme.id;
            return (
              <div
                key={theme.id}
                onClick={() => setSelectedTheme(theme.id)}
                className={`${styles.themeCard} ${isSelected ? styles.selectedCard : ''}`}
              >
                <div className={styles.themeIconWrapper}>
                  {typeof theme.icon === 'string' ? (
                    <span className="text-2xl">{theme.icon}</span>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#e82542] flex items-center justify-center">
                      {theme.icon}
                    </div>
                  )}
                </div>
                <span className="text-xs font-semibold text-white mt-2">{theme.name}</span>
                {theme.words && <span className="text-[11px] text-[#8f96a3] mt-0.5">{theme.words}</span>}
              </div>
            );
          })}
        </div>

        {/* Red Scrollbar Accent */}
        <div className={styles.progressBarWrapper}>
          <div className={styles.progressBarFill} />
        </div>

        {/* Form Elements */}
        <div className="mt-8 space-y-5">
          {/* Room Name */}
          <div>
            <label className="block text-[10px] font-bold tracking-wider text-[#8f96a3] uppercase mb-2">
              ROOM NAME
            </label>
            <input
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              className={styles.inputField}
            />
          </div>

          {/* Grid Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`${styles.selectDropdown} relative group cursor-pointer`}>
              <div className="flex items-center gap-2 text-sm text-gray-200 w-full">
                <Users className="w-4 h-4 text-gray-400 shrink-0 pointer-events-none" />
                <select
                  value={maxPlayers}
                  onChange={(e) => setMaxPlayers(Number(e.target.value))}
                  className="w-full bg-transparent text-sm text-gray-200 outline-none appearance-none cursor-pointer pr-6 z-10"
                >
                  <option value={3} className="bg-[#111422] text-gray-200">Max 3 players</option>
                  <option value={4} className="bg-[#111422] text-gray-200">Max 4 players</option>
                  <option value={5} className="bg-[#111422] text-gray-200">Max 5 players</option>
                  <option value={6} className="bg-[#111422] text-gray-200">Max 6 players</option>
                  <option value={7} className="bg-[#111422] text-gray-200">Max 7 players</option>
                  <option value={8} className="bg-[#111422] text-gray-200">Max 8 players</option>
                </select>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <div className={styles.imposterCard}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#181b26] border border-[#262a3a] flex items-center justify-center text-xs">
                  ♟
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Imposters</div>
                  <div className="text-[10px] text-[#8f96a3]">Acts like regular player</div>
                </div>
              </div>
              <span className="text-xs font-bold text-[#f83353]">2 Imposters</span>
            </div>
          </div>

          {/* Create Button */}
          <button className={styles.createButton}>
            <Zap className="w-5 h-5 fill-current" />
            Create Room
          </button>
        </div>

        {/* Toggles Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className={styles.toggleRow}>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#f83353]" />
              <span className="text-xs font-medium text-gray-200">Require Account</span>
            </div>
            <button 
              onClick={() => setShowRulesModal(true)} 
              className={styles.ruleSummaryBadge}
            >
              RULE SUMMARY
            </button>
            <label className={styles.switch}>
              <input 
                type="checkbox" 
                checked={requireAccount} 
                onChange={(e) => setRequireAccount(e.target.checked)} 
              />
              <span className={styles.slider}></span>
            </label>
          </div>

          <div className={styles.toggleRow}>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#f83353]" />
              <span className="text-xs font-medium text-gray-200">Allow Spectators</span>
            </div>
            <label className={styles.switch}>
              <input 
                type="checkbox" 
                checked={allowSpectators} 
                onChange={(e) => setAllowSpectators(e.target.checked)} 
              />
              <span className={styles.slider}></span>
            </label>
          </div>
        </div>
      </div>

      {/* Rules Summary Overlay Dialog */}
      <Dialog open={showRulesModal} onOpenChange={setShowRulesModal}>
        <DialogContent className={styles.dialogContent}>
          <DialogClose className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors">
            <X className="w-4 h-4" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <DialogHeader className="flex flex-row items-start gap-3 space-y-0 text-left mb-4">
            <div className="p-2.5 rounded-xl bg-[#231219] border border-[#3e1724]">
              <Shield className="w-6 h-6 text-[#f83353]" />
            </div>
            <div>
              <DialogTitle className="text-base font-bold text-white tracking-wide">
                Rules Summary
              </DialogTitle>
              <DialogDescription className="text-xs text-[#8f96a3] mt-0.5">
                Quick overview of how the room works.
              </DialogDescription>
            </div>
          </DialogHeader>

          <div className="space-y-2.5 my-2">
            {RULES.map((rule) => (
              <div key={rule.num} className={styles.ruleCard}>
                <div className={styles.ruleBadge}>{rule.num}</div>
                <div>
                  <h4 className="text-xs font-semibold text-white">{rule.title}</h4>
                  <p className="text-[11px] text-[#8f96a3] whitespace-pre-line leading-relaxed mt-0.5">
                    {rule.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button 
            className={styles.gotItButton}
            onClick={() => setShowRulesModal(false)}
          >
            Got it
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};